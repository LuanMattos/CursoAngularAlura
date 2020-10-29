import {Injectable} from "@angular/core";
import {TokenService} from "../token/token.service";
import {BehaviorSubject} from "rxjs";
import {User} from "./user";
import * as jwt_decode from 'jwt-decode';

@Injectable({providedIn:'root'})
export class UserService{

  /** Ver explicação no header.component (diferença de Subject e BehaviorSubject **/
  private userSubject = new BehaviorSubject<User>(null);
  private userName:string;

  constructor(private tokenService:TokenService) {
    /** Ternário (terneiro) mais bonito, mesma coisa que this.tokenService.hasToken()?This.decodeAndNotify():false **/
    this.tokenService.hasToken() && this.decodeAndNotify()
  }

  /** setToken a nível de UI **/
  setToken(token:string){
    this.tokenService.setToken(token)
    this.decodeAndNotify()
  }
  getUser(){
    /** Aqui retornamos o OBSERVABLE (não os dados), para retornar os dados, lembrando, é subscribe **/
    return this.userSubject.asObservable();
  }

  /** Decodificamos nosso token **/
  private decodeAndNotify(){
    const token = this.tokenService.getToken();

    /** Maneira de fazer casting (idem no C#) - pega os campos da interface User (precisa que retorne todos os campos corretamente) **/
    const user = jwt_decode(token) as User;

    this.userName = user.name;

    /** Emitimos (para toda app) os dados através do Subject **/
    this.userSubject.next(user);

  }
  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }
  isLogged(){
    return this.tokenService.hasToken();
  }
  getUserName(){
    return this.userName;
  }

}
