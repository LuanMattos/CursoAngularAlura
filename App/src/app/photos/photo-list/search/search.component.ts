import {Component, OnInit, Output, EventEmitter,Input} from "@angular/core";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";
/**
 * Sequência: (Se basear no photo-list.component & search.component)
 *  1° app-photos possui filtro filterByDescription:filter
 *  2° app-search aguarda evento (onTyping)
 *  3° Usuário digita & filter recebe $event (app-search)
 *  4° ngOnInit fica aguardando evento de onTyping
 *  5° Recebindo o "assunto", aguarda 400ms (pipe)
 *  6° Emite para filterByDescription:filter e o filtro ocorre em app-photos
 * */
@Component({
  selector:'app-search',
  templateUrl:'./search.component.html'
})
export class SearchComponent implements OnInit {
  /** Pai ---> Filho **/
  @Output() onTyping = new EventEmitter<string>();

  /** Filho ---> Pai **/
  @Input() value:string = '';
  /**
   * Contrário do Observable que é multicast, o Subject é multicast e envia/recebe de/para todos assinantes
   * https://rxjs-dev.firebaseapp.com/guide/subject
   * https://tegra.com.br/manipulando-estado-com-observables-e-subjects-usando-rxjs/
   **/
  debounce:Subject<string> = new Subject<string>();
  filter:string = '';

  ngOnInit():void{
    this.debounce
      /** Mágica que faz captar a ultima sentença digitada após 400ms **/
      /** Evento personalizado com EventEmitter **/
      .pipe(debounceTime(400))
      .subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy():void {
    /** Precisamos desalocar memória do nosso Observable **/
    this.debounce.unsubscribe()
  }

}
