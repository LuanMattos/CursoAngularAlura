import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

import {PhotoComment} from "../../photo/photo-comment";
import {PhotoService} from "../../photo/photo.service";
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-photo-comments',
  templateUrl: 'photo-comments.component.html',
  styleUrls: ['photo-comments.scss']
})
export class PhotoCommentsComponent implements OnInit {
  comments$: Observable<PhotoComment[]>;
  commentForm:FormGroup;
  @Input() photoId:number;

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private photoService: PhotoService) {
  }

  ngOnInit():void {
    const photoId  = this.activatedRoute.snapshot.params.photoId;
    this.comments$ = this.photoService.getComments(photoId);
    this.commentForm = this.formBuilder.group({
      comment:[
        '',
        [Validators.maxLength(300),Validators.required]
      ]
    })
  }
  save(){
    const comment = this.commentForm.get('comment').value as string;

    /**
     * Exemplo de como atualizar a lista depois de salva.
     *
     * Aqui passamos o subscribe DIRETO para nosso Observable
     *  até porque, nosso async já fara o subscribe no html
     **/
    this.comments$ = this.photoService
      .addComment(this.photoId,comment)
      /** "Faz isso antes do subscribe" **/
      .pipe(switchMap(()=>this.photoService.getComments(this.photoId)))
      /**
       *tap = "Olha cara, antes de retornar o Observable, deixa eu fazer um parada aqui antes"
       *Ler sobre Side Effect:
       ** https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0#:~:text=Better%20Redux%20Architecture%E2%80%9D.-,Side%20Effects,the%20parent%20function%20scope%20chain)
       **/
      .pipe(tap(()=>{
        this.commentForm.reset();
      }))


  }

}
