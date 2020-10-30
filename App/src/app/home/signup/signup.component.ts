import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


import {fieldsSignupValidator} from "../../shared/validators/fields-signup.validator";
import {UserNotTakenValidatorService} from "./user-not-taken.validator.service";
import {NewUser} from "./new-user.interface";
import {SignupService} from "./signup.service";
import {PlatformDetectorService} from "../../core/platform-detector/platform-detector.service";

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html'
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('inputEmail') inputEmail:ElementRef<HTMLInputElement>;

  constructor(
    private userNotTakenValidator:UserNotTakenValidatorService,
    private formBuilder: FormBuilder,
    private signUpService:SignupService,
    private router:Router,
    private platformDetectionService:PlatformDetectorService
    ) {

  }

  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      userName: [
        // Valor padrão
        '',
        // Validadores síncronos
        [
          fieldsSignupValidator,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(/^[a-z0-9_\-]+$/)
        ],
        // Validadores Asíncronos
        /** Lembrando da anotação da signup.service (Como validar campos vindo do BACK) **/
        [
          this.userNotTakenValidator.checkUserNameTaken()
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
        ]
      ]
    })
  }

  ngAfterViewInit() {
    /** Para que o focus funcione, precisamos declarar o #emailIput no form do html **/
    this.platformDetectionService.isPlatformBrowser()
    && this.inputEmail.nativeElement.value;
  }

  signUp(){
    const newUser = this.signupForm.getRawValue() as NewUser;
    console.log(newUser)
    this.signUpService
      .newUser(newUser)
      .subscribe(
        ()=>this.router.navigate(['']),
        err=>console.log(err.message)
      )
  }

}
