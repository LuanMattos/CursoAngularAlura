import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';
  //TypeScript = Quando não tipamos o dado, o mesmo retorn tipo n
   photos:Object[] = [];

  constructor(http: HttpClient) {

    //Precisamos tipar o dado, pois o Angular não sabe o tipo que estará vindo do Back
    http.get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(
        photos => this.photos = photos,
            err => console.log(err.message)
      );
  }

}
