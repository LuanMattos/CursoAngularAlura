import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NewUser} from "./new-user.interface";
import {environment} from "../../../environments/environment";

const API = environment.ApiUrl;

/** Nem sempre precisamos usar nosso ... Portanto vamos declarar um provedor em home.module, já que apenas o home.module vai usá-lo **/
@Injectable()
export class SignupService{

  constructor(private httpCliente:HttpClient) {}

  /**
   * Esta classe tem como objetivo ser usado pelo validador, PORÉM o validador não suporta injeção de dependências
   * Para isso criaremos o user-not-taken.validator.service.ts pra gente conseguir acessar essa validação
   * Então quando precisamos fazer validação de campos que precisam buscar dados do BACK precisamos:
   *    -Criar um Serviço com o retorno desses dados (igual esta classe)
   *    -Criar outro Serviço com "função" de validador (user-not-taken.validator.service)
   *    -Chamar o Serviço de consulta (Este) no Serviço de Validação
   *    -Na Classe do Formulário desejado (signup.component), chamar a função desejada do Serviço validador (this.userNotTakenValidator.checkUserNameTaken())
   ***/
  checkUserNameTaken(userName:string){
   return this.httpCliente.get(API + '/user/exists/' + userName)
  }
  newUser( newUser:NewUser ){
    return this.httpCliente.post(API + '/user/signup',newUser);
  }
}
