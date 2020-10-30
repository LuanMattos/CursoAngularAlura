import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {PhotoListComponent} from "./photo-list.component";
import {FilterByDescription} from "./filter-by-description.pipe";
import {PhotosComponent} from "./photos/photos.component";
import {LoadButtonComponent} from "./load-button/load-button.component";
import {PhotoModule} from "../photo/photo.module";
import {CardModule} from "../../shared/card/card.module";
import {SearchComponent} from "./search/search.component";
import {DarkenOnHoverModule} from "../../shared/directives/dark-on-hover/darken-on-hover.module";
import {UxModule} from "../../core/ux/ux-module";

@NgModule({
  declarations:[
    PhotoListComponent,
    FilterByDescription,
    PhotosComponent,
    LoadButtonComponent,
    SearchComponent
  ],
  imports:[
    /** Lembra da "treta" do BrowserModule? (explicação em app.module)*/
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule,
    UxModule
  ]
})
export class PhotoListModule{

}
