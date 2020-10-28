import {NgModule} from "@angular/core";
import {SignInComponent} from "./signin/signin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {VmessageModule} from "../shared/vmessage/vmessage.module";

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
    VmessageModule
  ]
})
export class HomeModule{}
