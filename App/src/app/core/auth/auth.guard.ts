import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

import {UserService} from "../user/user.service";
import {Observable} from "rxjs";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{

  constructor(
    private router:Router,
    private userService:UserService) {}

  /** Obrigatoriamente preciso retornar algo como : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree **/

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ){

    if(this.userService.isLogged()){
      this.router.navigate(['user',this.userService.getUserName()])
      return false
    }
    return true;
  }

}
