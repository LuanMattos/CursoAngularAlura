import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {fieldsSignupValidator} from "../../shared/validators/fields-signup.validator";
import {UserNotTakenValidatorService} from "./user-not-taken.validator.service";

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html'
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private userNotTakenValidator:UserNotTakenValidatorService,
    private formBuilder: FormBuilder) {

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

}
