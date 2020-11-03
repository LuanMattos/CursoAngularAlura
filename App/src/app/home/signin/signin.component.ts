import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/auth/auth.service";
import {PlatformDetectorService} from "../../core/platform-detector/platform-detector.service";

@Component({
  templateUrl:'./signin.component.html'
})
export class SignInComponent implements OnInit{

  /** Se liga com o Form através do data Bind [formGroup] */
  loginForm:FormGroup;
  fromUrl:string;

  /** Pega o elemento do html ** OU ElementRef<HTMLInputElement> **/
  @ViewChild('userNameInput') userNameInput:ElementRef;

  /** Construtor de Formulário **/
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router,
    private platformDetectionService:PlatformDetectorService,
    private activatedRoute:ActivatedRoute
    ) {}

  ngOnInit():void{
    /** Loop infinito **/
    // this.activatedRoute
    //   .queryParams
    //   .subscribe(params => {
    //
    //   this.fromUrl = params['paraUrl'];
    // });
    this.loginForm = this.formBuilder.group({
        userName:['',Validators.required],
        password:['',Validators.required]
    });
  }
  ngAfterViewInit() {
      /** Para que o focus funcione, precisamos declarar o #emailIput no form do html **/
      /** Pode causar problema se #userNameInput estiver antes de alguma diretiva ngIf **/
      // this.platformDetectionService.isPlatformBrowser()
      // && this.userNameInput.nativeElement.focus();
  }

    login(){
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    if(this.loginForm.valid && !this.loginForm.pending)

      this.authService.authenticate(userName,password)
      .subscribe(
        ()=> {
          console.log(this.fromUrl)
          this.fromUrl
            ?
            this.router.navigateByUrl(this.fromUrl)
            :
            this.router.navigate(['user', userName])
        },
        err=> {
          this.loginForm.reset();

          /** Reza a lenda que não podemos usar Rendered no lugar de nativeElement, apenas o nativo do Angular **/
          /** Exemplo de como condicionar eventos se executado no Browser **/
          this.platformDetectionService.isPlatformBrowser()
            && this.userNameInput.nativeElement.focus();

        }
      )
  }

}
