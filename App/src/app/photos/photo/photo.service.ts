import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Photo} from "./photo";

const API = 'http://localhost:3000/';

/**Com Injectable TODA a aplicação vai poder usar o servço de Fotos*/
@Injectable({providedIn:'root'})
export class PhotoService {

  /**
   * Usando private/public http... não precisamos criar o atributo e construir no construtor,
   * Ou seja, ele se torna AUTOMATICAMENTE propriedade da classe
   **/
  constructor(private http: HttpClient) {}

  findById(id : number){

    return this.http.get<Photo>(API + 'photos/' + id);
  }

  listFromUser(userName : string){
    /**
     * Precisamos tipar o dado, pois o Angular não sabe o tipo que estará vindo do Back
     * Também não colocamos Subscribe, quem usar o método que vai chamar
     * Precisamos tipar o dado, pois o Angular não sabe o tipo que vai vir do Back
     **/

    return this.http.get<Photo[]>(API + userName +'/photos');
  }
  listFromUserPaginated( userName : string,page:number ){
        const params = new HttpParams()
                  .append('page',page.toString());
        return this.http.get<Photo[]>(API +  userName + '/photos', {params:params});//ou apenas {params}
  }
  upload(description:string, allowComments:boolean, file:File){
    const formData = new FormData();

    formData.append('description',description);
    formData.append('allowComments',allowComments?'true':'false');
    formData.append('imageFile',"image/"+file);

    return this.http.post(API + 'photos/upload',formData)

  }
}
