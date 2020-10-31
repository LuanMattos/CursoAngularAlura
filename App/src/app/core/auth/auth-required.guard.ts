import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

import {UserService} from "../user/user.service";

@Injectable({providedIn:'root'})
export class AuthRequiredGuard implements CanActivate{

  constructor(
    private router:Router,
    private userService:UserService) {}

  canActivate( ){
    if(!this.userService.isLogged()){
      this.router.navigate([''])
      return false;
    }
    return true;
  }
}
