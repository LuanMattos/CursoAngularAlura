import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";


import {PhotoService} from "../photo/photo.service";
import {Photo} from "../photo/photo";
import {AlertService} from "../../shared/alert/alert.service";

@Component({
  selector:'app-photo-detail',
  templateUrl:'photo-detail.component.html'
})
export class PhotoDetailComponent implements OnInit{

  photo$:Observable<Photo>;
  photoId:number;

  constructor(
    private alertService:AlertService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private photoService:PhotoService) {}

    ngOnInit():void {
    /** photoId=> Id do parâmetro enviado pelo photo.routing no html **/
    this.photoId  = this.activatedRoute.snapshot.params.photoId
    this.photo$    = this.photoService.findById(this.photoId);

    /** Id de foto que não existe **/
    this.photo$.subscribe(()=>{},(err)=>{
      this.router.navigate(['not-found'])
    })
  }
  removePhoto(){
    this.alertService.success('Imagem excluída! (código comentado para não excluir)')
    this.router.navigate([''])
    return
    return this.photoService.removePhoto(this.photoId)
      .subscribe(()=>{

        /** Replace true => quando excluímos uma foto e voltamos, deve retornar para o '' absolutp dando replace na url toda **/
        this.router.navigate([''],{replaceUrl:true})
      },
        error=>{
        this.alertService.warning('Ocorreu um erro, tente mais tarde!')
          }
        )
  }
}
