import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {PhotoService} from "../photo/photo.service";
import {Photo} from "../photo/photo";
import {Observable} from "rxjs";

@Component({
  selector:'app-photo-detail',
  templateUrl:'photo-detail.component.html'
})
export class PhotoDetailComponent implements OnInit{

  photo$:Observable<Photo>;
  photoId:number;

  constructor(
    private activatedRoute:ActivatedRoute,
    private photoService:PhotoService) {}

    ngOnInit():void {
    /** photoId=> Id do parâmetro enviado pelo photo.routing no html **/
    this.photoId  = this.activatedRoute.snapshot.params.photoId
    this.photo$    = this.photoService.findById(this.photoId);

  }
}
