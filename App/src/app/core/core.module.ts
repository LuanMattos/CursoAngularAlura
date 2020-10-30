import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {HeaderComponent} from "./header/header.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {RequestInterceptor} from "./auth/request.interceptor";

@NgModule({
  declarations:[HeaderComponent],
  imports:[
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent],
  /** Apartir de agora, o Angular 'não manda mais nas rotas' e sim nosso request.interceptor **/
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true
    }
  ]
})
export class CoreModule{}
