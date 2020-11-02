import {Component, Input, OnChanges,SimpleChanges} from '@angular/core';
import {Photo} from "../../photo/photo";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {

  @Input() photos:Photo[] = [];
  rows:any[] = [];

  constructor() { }
  /**
   * Escuta as mudanças - Praticamente um Watcher do Vue
   **/
  ngOnChanges(changes: SimpleChanges) {
    /** Se houver mudanças no photos */
    if(changes.photos)
      this.rows = this.photos;
  }
}
