/** System */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../core/auth/auth.guard";

/** Components */
import {HomeComponent} from "./home.component";
import {SignInComponent} from "./signin/signin.component";
import {SignUpComponent} from "./signup/signup.component";

/** Resolvers */

const routes:Routes = [
  /**
   * Essas rotas ficaram subordinadas ao app.routing.module para nosso Lazy Loading
   **/
  {
    path:'',
    component:HomeComponent,
    /** Aqui temos nosso routerOutlet, basicamente uma rota dentro de outra rota PAI **/
    children:[
      /** No navegador então termos /home **/
      {
        path:'',
        component:SignInComponent,
        /** Rota que aguarda requisição antes do carregamento do component **/
        canActivate:[AuthGuard],
        data:{
          title:'Sign In'
        }
      },
      /** No navegador então termos /home/signup **/
      {
        path:'signup',
        component:SignUpComponent,
        data:{
          title:'Sign Up'
        }
      },
    ]
  },

];
@NgModule({
  /** Mudamos para forChild **/
  imports:[ RouterModule.forChild(routes) ],
  exports:[RouterModule]
})
export class HomeRoutingModule{

}
