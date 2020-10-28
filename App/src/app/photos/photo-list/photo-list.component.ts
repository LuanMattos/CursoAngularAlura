import { Component, OnInit } from '@angular/core';
import {Photo} from '../photo/photo';
import {PhotoService} from '../photo/photo.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  title = 'App';
  /** TypeScript = Quando não tipamos o dado, o mesmo retorn tipo n **/
  photos:Photo[] = [];
  filter:string = '';

  /**
   * Deixaremos o construtor apenas para injeção de dependências
   **/
  constructor(
    private photoService : PhotoService,
    private activatedRoute:ActivatedRoute
  ) {}

  /**
   * E ngOnInit (Live Circle) para objetos de inicialização
   * O correto é o Angular 'Obrigao' a implementação do método, então implementamos a
   *  interface OnInit na classe (implements OnInit)
   **/

  ngOnInit():void{
    /** Aqui pegamos o parâmetro da rota */
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService.listFromUser(userName)
      .subscribe(photos => this.photos = photos)
  }
}
