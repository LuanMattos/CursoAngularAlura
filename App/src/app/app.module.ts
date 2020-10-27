import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PhotosModule} from "./photos/photos.module";
//Nossa classe de Http, lembrando que a mesma se repete no componente
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  //Apenas components
  declarations: [
    AppComponent
  ],
  //Os Modules
  imports: [
    //BrowserModule importa automaticamente quando importamos um module
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    //Nossa classe de Http, lembrando que a mesma se repete no componente
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
