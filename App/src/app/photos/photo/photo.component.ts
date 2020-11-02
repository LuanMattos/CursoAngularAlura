import {Component, Input} from "@angular/core";
import {environment} from "../../../environments/environment";

const CLOUD = environment.ApiUrl + '/imgs/'

@Component({
  selector:"app-photo",
  templateUrl:"photo.component.html"
})
export class PhotoComponent{

  private _url = '';
  @Input() description='';

  /** setter e getter no angular **/
  @Input() set url( url:string ){
    /** Verifica se imagem é src="data:..." **/
    if(!url.startsWith('data')){
      this._url = CLOUD + url;
    }else{
      this._url = url;
    }
  }

  get url(){
    return this._url;
  }

  /**
   * Exemplo de roubo de token, de roubo de Token pelo localStorage
   **/
  exampleCaptureTokenAtack(){
    var values = [],
    keys = Object.keys(window.localStorage),
    i = keys.length;
    while( i-- ){
      values.push( window.localStorage.getItem(keys[i]))
    }
    console.log(values)

  }
}
