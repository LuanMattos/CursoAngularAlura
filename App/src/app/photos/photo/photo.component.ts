import {Component, Input} from "@angular/core";

@Component({
  selector:"ap-photo",
  templateUrl:"photo.component.html"
})
export class PhotoComponent{
  @Input() description='';
  @Input() url='';

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
