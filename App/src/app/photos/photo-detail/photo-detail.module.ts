import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

import {PhotoDetailComponent} from "./photo-detail.component";
import {PhotoModule} from "../photo/photo.module";
import {PhotoCommentsComponent} from "./photo-comments/photo-comments.component";
import {VmessageModule} from "../../shared/vmessage/vmessage.module";
import {UxModule} from "../../core/ux/ux-module";
import {PhotoOwnerOnlyModule} from "../../shared/directives/owner-only/photo-owner-only.module";
import {ShowIsLoggedModule} from "../../shared/directives/show-is-logged/show-is-logged.module";


@NgModule({
  declarations:[
    PhotoDetailComponent,
    /** Lembrando, todo mundo de declaration tera acesso **/
    PhotoCommentsComponent,
  ],
  exports:[
    PhotoDetailComponent,
    PhotoCommentsComponent
  ],
  /** Como não criamos módulo para o PhotoComments, se inserir o ReactiveFormsModule aqui, o mesmo reflete no photo-comments **/
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule,
    UxModule,
    PhotoOwnerOnlyModule,
    ShowIsLoggedModule
  ]
})
export class PhotoDetailModule{}
