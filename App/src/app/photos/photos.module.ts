// Aqui criamos um Feature, para não encher o app.module de declarações a medida que o App cresce
import {NgModule} from "@angular/core";
import {PhotoComponent} from "./photo/photo.component";

@NgModule({
  //Como no C#, o declaration representaria um Private
  declarations:[PhotoComponent],
  //Sem o exports, o Module não funciona
  exports:[PhotoComponent]
})
export class PhotosModule{

}
