import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

import {PhotoDetailComponent} from "./photo-detail.component";
import {PhotoModule} from "../photo/photo.module";
import {PhotoCommentsComponent} from "./photo-comments/photo-comments.component";
import {VmessageModule} from "../../shared/vmessage/vmessage.module";
import {UxModule} from "../../core/ux/ux-module";
import {PhotoOwnerOnlyDirective} from "./directives/photo-owner-only.directive";


@NgModule({
  declarations:[
    PhotoDetailComponent,
    PhotoCommentsComponent,
    /** Lembrando, todo mundo de declaration tera acesso **/
    PhotoOwnerOnlyDirective
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
    UxModule
  ]
})
export class PhotoDetailModule{}
