import { Component, OnInit } from '@angular/core';
import {Photo} from '../photo/photo';
import {PhotoService} from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  title = 'App';
  /** TypeScript = Quando não tipamos o dado, o mesmo retorn tipo n **/
  photos:Photo[] = [];

  /**
   * Deixaremos o construtor apenas para injeção de dependências
   **/
  constructor(private photoService : PhotoService) {}

  /**
   * E ngOnInit (Live Circle) para objetos de inicialização
   * O correto é o Angular 'Obrigao' a implementação do método, então implementamos a
   *  interface OnInit na classe (implements OnInit)
   **/

  ngOnInit():void{
    this.photoService.listFromUser('flavio')
      .subscribe(photos => this.photos = photos)
  }
}
