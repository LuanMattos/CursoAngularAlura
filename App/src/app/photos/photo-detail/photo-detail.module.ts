import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {PhotoDetailComponent} from "./photo-detail.component";
import {PhotoModule} from "../photo/photo.module";

@NgModule({
  declarations:[PhotoDetailComponent],
  exports:[PhotoDetailComponent],
  imports: [CommonModule, PhotoModule]
})
export class PhotoDetailModule{}
