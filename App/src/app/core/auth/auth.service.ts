import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from 'rxjs/operators';
import {UserService} from "../user/user.service";
import {environment} from "../../../environments/environment";



const API_URL = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private  http:HttpClient,
    private userService:UserService
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
            this.userService.setToken(authToken);
            console.log(authToken)
          }
        )
      )
  }
}
