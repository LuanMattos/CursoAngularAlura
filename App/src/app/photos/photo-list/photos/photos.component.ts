import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Photo} from "../../photo/photo";
import {Router} from "@angular/router";

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
   * Escuta as mudanças - Praticamente um Watcher
   **/
  ngOnChanges(changes: SimpleChanges) {
    /** Se houver mudanças no photos */
    if(changes.photos)
      this.rows = this.photos;
  }
}
