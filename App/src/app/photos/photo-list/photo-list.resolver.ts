import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

import {PhotoService} from "../photo/photo.service";
import {Photo} from "../photo/photo";

@Injectable({providedIn:'root'})
/**
 * Criação de RESOLVER, resolve primeiro o request e depois disponibiliza para o component.
 * Carrega durante a ativação da rota, mas antes do componente ser ativado (construtor resolve)
 * Depois de criado o RESOLVE, precisamos definir o mesmo no nosso app.routing.modules ou sua classe de modulo
 */

export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

  constructor(private router:Router,private service:PhotoService) {}

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<Photo[]>{
      const userName = route.params.userName;
      this.service.listFromUser(userName).subscribe(()=>{},error=>{
        this.router.navigate(['not-found'])
      })
      return this.service.listFromUser(userName);
  }


}
