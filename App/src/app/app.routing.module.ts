/** System */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

/** Components */
import {PhotoListComponent} from "./photos/photo-list/photo-list.component";
import {PhotoFormComponent} from "./photos/photo-form/photo-form.component";
import {NotFoundComponent} from "./errors/not-found/not-found.component";

/** Resolvers */
import {PhotoListResolver} from "./photos/photo-list/photo-list.resolver";
import {SignInComponent} from "./home/signin/signin.component";
import {AuthGuard} from "./core/auth/auth.guard";
import {SignUpComponent} from "./home/signup/signup.component";
import {HomeComponent} from "./home/home.component";

const routes:Routes = [
  {
    path:'',
    component:HomeComponent,
    /** Aqui temos nosso routerOutlet, basicamente uma rota dentro de outra rota PAI **/
    children:[
      {
        path:'',
        component:SignInComponent,
        /** Rota que aguarda requisição antes do carregamento do component **/
        canActivate:[AuthGuard]
      },
      {
        path:'signup',
        component:SignUpComponent
      },
    ]
  },
  {
    path:'user/:userName',
    component:PhotoListComponent,
    resolve:{
      photos:PhotoListResolver
    }
  },
  {
    path:'p/add',
    component:PhotoFormComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  },

];
@NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
