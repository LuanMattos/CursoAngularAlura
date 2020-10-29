import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from 'rxjs/operators';
import {TokenService} from "../token/token.service";

const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private  http:HttpClient,
    private tokenService:TokenService
  ) { }

  authenticate(userName:string,password:string){
    /**
     * {observe:"response"} => na requisição, vou recebe-la completa (inclusive cabeçalhos)
     **/
    return this.http
      .post(API_URL + 'user/login',{userName,password},{observe:"response"})
      /**
       * Entre a execução da requisição e do subscribe, o pipe "entra" e aplica um determinado operador
       *    como filtros, timeOut etc..
       * Neste caso, vai servir pra gente buscar o header do TOKEN para nosso subscribe, assim não precisamos
       *      trazer esse token no subscribe da classe de LOGIN (já que o componente auth.service.ts que é o responsável por autenticar e não o login)
       **/
      .pipe(
        tap(
          res=>{
            const authToken = res.headers.get('x-access-token')
            this.tokenService.setToken(authToken);
            console.log(authToken)
          }
        )
      )
  }
}
