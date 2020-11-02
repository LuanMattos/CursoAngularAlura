import {NgModule} from "@angular/core";
import {PhotoOwnerOnlyDirective} from "./photo-owner-only.directive";


@NgModule({
  declarations:[
    PhotoOwnerOnlyDirective
  ],
  exports:[
    PhotoOwnerOnlyDirective
  ]
})
export class PhotoOwnerOnlyModule {}
