import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {PhotoFormComponent} from "./photo-form.component";
import {VmessageModule} from "../../shared/vmessage/vmessage.module";
import {PhotoModule} from "../photo/photo.module";
import {UxModule} from "../../core/ux/ux-module";
import {DarkenOnHoverModule} from "../../shared/directives/dark-on-hover/darken-on-hover.module";

@NgModule({
  declarations:[
    PhotoFormComponent,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    FormsModule,
    RouterModule,
    PhotoModule,
    UxModule,
    DarkenOnHoverModule
  ]
})
export class PhotoFormModule{

}
