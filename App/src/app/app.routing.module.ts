/** System */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

/** Class */
import {PhotoListComponent} from "./photos/photo-list/photo-list.component";
import {PhotoFormComponent} from "./photos/photo-form/photo-form.component";
import {NotFoundComponent} from "./errors/not-found/not-found.component";
import {AuthRequiredGuard} from "./core/auth/auth-required.guard";


/** Resolvers */
import {PhotoListResolver} from "./photos/photo-list/photo-list.resolver";
import {PhotoDetailComponent} from "./photos/photo-detail/photo-detail.component";



/**
* Como fazer Lazy Loading?(carregamento preguiçoso)
 * As vezes nossa Aplicação fica muito grande, ao invés de carregar tudo de uma vez só
 *  podemos usar o conceito de Lazy Loading, ou seja, carregar o necessário primeiro, e a medida que o usuário
 *  solicite outra página maior, o App responde com a mesma.
 *-Precisamos tirar nosso Componente a ser carregado sob demanda (Home) do app.module,
 *  se não, não faz sentido fazer Lazy Loading
 *-Precisamos importar nosso arquivo de rota (home.routing.modue) em nosso home.module
 *
* https://angular.io/guide/lazy-loading-ngmodules
**/


const routes:Routes = [
  {
    /** Este cara epenas redireciona para o home (que definimos como principal) **/
    path:'',
    /** Indico que deve seguir a rota path:'' exatamente como declarei **/
    /** Neste caso, se não for colocado, qualquer rota depois de '/' será considerada **/
    pathMatch:'full',
    redirectTo:'home',
    data: {
      title:''
    }
  },
  {
    path:'home',
    /** Aqui pedimos o carregamento sob demanda **/
    // loadChildren:'./home/home.module#HomeModule' => Angular < 8
    loadChildren:() => import('src/app/home/home.module').then(m => m.HomeModule),
    data: {
      animation: 'HomePage',
      title:'Home'
    }
  },
  {
    path:'user/:userName',
    component:PhotoListComponent,
    resolve:{
      photos:PhotoListResolver
    },
    data: {
      animation: 'AboutPage',
      title:'Timeline'
    }
  },
  {
    path:'p/add',
    component:PhotoFormComponent,
    canActivate:[AuthRequiredGuard],
    data: {
      animation: 'HomePage',
      title:'Add Photo'
    }
  },
  {
    path:'p/:photoId',
    component:PhotoDetailComponent,
    data: {
      animation: 'FilterPage',
      title:'Detail Photo'
    },
  },
  {
    path:'not-found',
    component:NotFoundComponent,
    data:{
      title:'Page not-found'
    }
  },
  {
    path:'**',
    redirectTo:'not-found',

  },

];
@NgModule({
  /**
   * Configuração do Apache/Tomcat e etc
   * https://cursos.alura.com.br/forum/topico-como-funcionar-rotas-do-angular-no-apache2-39987#:~:text=Rotas%20do%20Angular%20s%C3%A3o%20processadas,voc%C3%AA%20estiver%20usando%20o%20HTML5Mode.
   **/
  imports:[ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
