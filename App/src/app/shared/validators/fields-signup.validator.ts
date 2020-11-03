import {AbstractControl} from "@angular/forms";

/** Podemos tambem usar o control:FormControl para validação de campos entre campos **/
export function fieldsSignupValidator(control:AbstractControl ){

  /**
   * Apenas como exemplo vamos criar nosso próprio validador
   * Podemos usar como forma de não precisar repetir nosso <app-message> ;)
   **/
  if(!control.value.length){
    return {validadorPersonalizado:true}
  }
  return null
}
