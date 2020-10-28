import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/auth.service";

@Component({
  templateUrl:'./signin.component.html'
})
export class SignInComponent implements OnInit{

  /** Se liga com o Form através do data Bind [formGroup] */
  loginForm:FormGroup;

  /** Pega o elemento do html ** OU ElementRef<HTMLInputElement> **/
  @ViewChild('userNameInput') userNameInput:ElementRef;

  /** Construtor de Formulário **/
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router
    ) {}

  ngOnInit():void{
    this.loginForm = this.formBuilder.group({
        userName:['',Validators.required],
        password:['',[Validators.required]]
    });
  }
  login(){
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService.authenticate(userName,password)
      .subscribe(
        ()=>this.router.navigate(['user',userName]),
        err=> {
          console.log(err.message)
          /** Reza a lenda que não podemos usar Rendered, apenas o nativo do Angular **/
          this.userNameInput.nativeElement.focus();
          this.loginForm.reset();
        }
      )
  }

}
