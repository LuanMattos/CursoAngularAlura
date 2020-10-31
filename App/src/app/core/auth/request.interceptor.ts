import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenService} from "../token/token.service";

@Injectable({providedIn:'root'})
export class RequestInterceptor implements HttpInterceptor{

  constructor(
    private tokenService:TokenService
  ) {}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /** Barbada, se o usuário estiver logado e validado pelo Back, colocamos no nossos cabeçalhos nosso x-access-token **/
    if(this.tokenService.hasToken()){
      const token = this.tokenService.getToken()
      req = req.clone({
        setHeaders:{
          'x-access-token':token
        }
      });
    }


    /** Se você for olhar nos cabeçalhos de suas requisições, podemos ver neste exemplo **/
    // req = req.clone({
    //   setHeaders:{
    //     'Teste':'Este cabeçalho Http não existe'
    //   }
    // });

    /** Deixa passar qualquer request
     * req => requisição atual
     * handle => 'lidar com ', ou seja, recebe a requisição que você mandar
     **/
    return next.handle(req);
  }

}
