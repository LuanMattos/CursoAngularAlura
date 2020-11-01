import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";


import {PhotoService} from "../photo/photo.service";
import {Photo} from "../photo/photo";

@Component({
  selector:'app-photo-detail',
  templateUrl:'photo-detail.component.html'
})
export class PhotoDetailComponent implements OnInit{

  photo$:Observable<Photo>;
  photoId:number;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private photoService:PhotoService) {}

    ngOnInit():void {
    /** photoId=> Id do parâmetro enviado pelo photo.routing no html **/
    this.photoId  = this.activatedRoute.snapshot.params.photoId
    this.photo$    = this.photoService.findById(this.photoId);
  }
  removePhoto(){
    return this.photoService.removePhoto(this.photoId)
      .subscribe(()=>{
        this.router.navigate([''])
      })
  }
}
