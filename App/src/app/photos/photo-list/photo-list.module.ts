import {NgModule} from "@angular/core";
import {PhotoListComponent} from "./photo-list.component";
import {FilterByDescription} from "./filter-by-description.pipe";
import {PhotosComponent} from "./photos/photos.component";
import {LoadButtonComponent} from "./load-button/load-button.component";
import {CommonModule} from "@angular/common";
import {PhotoModule} from "../photo/photo.module";

@NgModule({
  declarations:[
    PhotoListComponent,
    FilterByDescription,
    PhotosComponent,
    LoadButtonComponent
  ],
  imports:[
    /** Lembra da "treta" do BrowserModule? (explicação em app.module)*/
    CommonModule,
    PhotoModule
  ]
})
export class PhotoListModule{

}
