import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
   * Escuta as mudanças - Praticamente um Watcher
   **/
  ngOnChanges(changes: SimpleChanges) {
    /** Se houver mudanças no photos */
    if(changes.photos)
      this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]){
    const  newRows = [];
    /**
     * Simulamos aqui um 'pagination', onde cortamos o array e montamos sempre de três em três
     **/
    for(let index = 0;index < photos.length;index+=3){
      newRows.push(photos.slice(index,index + 3 ))
    }
    return newRows;
  }

}
