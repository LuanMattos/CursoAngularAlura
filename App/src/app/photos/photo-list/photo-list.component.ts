import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs";
import {debounceTime} from 'rxjs/operators';

import {Photo} from '../photo/photo';
import {PhotoService} from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit,OnDestroy {

  title = 'App';
  /** TypeScript = Quando não tipamos o dado, o mesmo retorn tipo n **/
  photos:Photo[] = [];
  filter:string = '';

  /**
   * Contrário do Observable que é multicast, o Subject é multicast e envia para todos assinantes
   * https://rxjs-dev.firebaseapp.com/guide/subject
   * https://tegra.com.br/manipulando-estado-com-observables-e-subjects-usando-rxjs/
   * **/
  debounce:Subject<string> = new Subject<string>();

  /**
   * (inserido no resolver)
   * Deixaremos o construtor apenas para injeção de dependências
   **/
  constructor(
    //private photoService : PhotoService,
    private activatedRoute:ActivatedRoute
  ) {}

  /**
   * (inserido no resolver)
   * E ngOnInit (Live Circle) para objetos de inicialização
   * O correto é o Angular 'Obrigao' a implementação do método, então implementamos a
   *  interface OnInit na classe (implements OnInit)
   **/

  ngOnInit():void{
    /** Aqui pegamos o parâmetro da rota - (inserido no resolver)*/
    // const userName = this.activatedRoute.snapshot.params.userName;
    // this.photoService.listFromUser(userName)
    //   .subscribe(photos => this.photos = photos)

    /** Busca os dados do activateRoute, ou seja, a requisição será feita por ROTA **/
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce
      /** Mágica que faz captar a ultima sentença digitada após 400ms **/
      .pipe(debounceTime(400))
      .subscribe(filter => this.filter = filter);
  }
  ngOnDestroy():void {
    /** Precisamos desalocar memória do nosso Observable **/
    this.debounce.unsubscribe()
  }
}
