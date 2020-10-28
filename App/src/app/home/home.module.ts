import {NgModule} from "@angular/core";
import {SignInComponent} from "./signin/signin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {VmessageModule} from "../shared/vmessage/vmessage.module";
import {RouterModule} from "@angular/router";

/**
 * Como ele vai ser carregado pelo app.module e está a nível de página, não precisamos usar Exports
 * **/
@NgModule({
  declarations:[
    SignInComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    /**
     * No app.routing.module, já temos o mesmo importado, e deve funcionar em todos os filhos
     * pois estão dentro (juntos) do import.
     * Porém ainda é uma boa prática colocar ele no home.module pra gente saber que home.module depende do mesmo
     * **/
    RouterModule
  ]
})
export class HomeModule{}
