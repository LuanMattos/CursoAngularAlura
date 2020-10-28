import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl:'./signin.component.html'
})
export class SignInComponent implements OnInit{

  /** Se liga com o Form através do data Bind [formGroup] */
  loginForm:FormGroup;

  /** Construtor de Formulário **/
  constructor( private formBuilder:FormBuilder ) {}

  ngOnInit():void{
    this.loginForm = this.formBuilder.group({
        userName:['',Validators.required],
        password:['',[Validators.required]]
    });
  }

}
