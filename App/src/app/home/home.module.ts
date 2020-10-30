import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";


import {SignInComponent} from "./signin/signin.component";
import {VmessageModule} from "../shared/vmessage/vmessage.module";
import {SignUpComponent} from "./signup/signup.component";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home.routing.module";
import {SignupService} from "./signup/signup.service";
import {UxModule} from "../core/ux/ux-module";

/**
 * Como ele vai ser carregado pelo app.module e está a nível de página, não precisamos usar Exports
 * **/
@NgModule({
  declarations:[
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VmessageModule,
    UxModule,
    /**
     * No app.routing.module, já temos o mesmo importado, e deve funcionar em todos os filhos
     * pois estão dentro (juntos) do import.
     * Porém ainda é uma boa prática colocar ele no home.module pra gente saber que home.module depende do mesmo
     * **/
    RouterModule,
    HomeRoutingModule
  ],
  providers:[SignupService]
})
export class HomeModule{}
