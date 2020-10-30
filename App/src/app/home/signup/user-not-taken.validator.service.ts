import {Injectable} from "@angular/core";
import {SignupService} from "./signup.service";
import {AbstractControl} from "@angular/forms";
import {debounceTime, switchMap,map,first} from "rxjs/operators";

/** Nem sempre precisamos usar nosso @Injectable como root, ou seja, nem sepre precisamos expor nosso serviço a TODA App **/
@Injectable()
export class UserNotTakenValidatorService{

  constructor(private signUpService:SignupService) {}
  checkUserNameTaken(){
   /**
    * Lembrando: Como esta função é Assíncrona, ela retorna um Observable, e não dados como as Sincronas
    * Por isso aqui usamos o valueChanges
    *
    * O ValueChanges é um evento gerado pelos formulários angulares sempre que o valor do FormControl,
    *     FormGroup ou FormArray muda.
    *     Ele retorna um observável para que você possa assiná-lo.
    *     O observável obtém o valor mais recente do controle.
    *     Ele nos permite rastrear as alterações feitas no valor em tempo real e responder a ele.
    *
    *  Sobre o switchMap => https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap
    **/
      return (control:AbstractControl)=>{
        return control
          .valueChanges
          .pipe(debounceTime(300))
          .pipe(switchMap(userName => this.signUpService.checkUserNameTaken(userName) ))
          /**
           * "{usuarioJaCadastrado:true}:null" => Igual nosso validador lower-case.validator
           *  Ou seja, campo que vamo utilizar em nosso DOM
           **/
          .pipe(map(ExisteOsuario => ExisteOsuario ? {usuarioJaCadastrado:true}:null))
          /**
           * O FormGroup faz pra nós o Subscribe automaticamente, mas ele nunca sabe quando para, portanto
           *  avisamos o Angular para pegar o primeiro valor do Subscribe
           *
           *  https://www.learnrxjs.io/learn-rxjs/operators/filtering/first
           **/
          .pipe(first())
      }

  }

}
