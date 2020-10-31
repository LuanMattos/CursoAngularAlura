import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {PhotoFormComponent} from "./photo-form.component";
import {VmessageModule} from "../../shared/vmessage/vmessage.module";
import {PhotoModule} from "../photo/photo.module";

@NgModule({
  declarations:[
    PhotoFormComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    FormsModule,
    RouterModule,
    PhotoModule
  ]
})
export class PhotoFormModule{

}
