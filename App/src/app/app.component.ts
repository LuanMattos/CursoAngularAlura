import {Component} from '@angular/core';
import {PhotoService} from "./photos/photo/photo.service";
import {Photo} from "./photos/photo/photo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';
  /** TypeScript = Quando não tipamos o dado, o mesmo retorn tipo n **/
   photos:Photo[] = [];

  constructor(photoService : PhotoService) {
    photoService.listFromUser('flavio')
      .subscribe(photos => this.photos = photos)
  }

}
