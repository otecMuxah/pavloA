import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  Validators
} from "@angular/forms";
import { CrossFieldErrorMatcher, passwordMatchValidator } from "./utils/sign-up.utils";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  private fb = inject(FormBuilder);

  signUpForm = this.fb.group({
    email: ['', {validators: [Validators.required, Validators.email]}],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  },
    { validators: passwordMatchValidator }
  );

  hideEmail: boolean = true;
  hideConfirmEmail: boolean = true;
  errorMatcher = new CrossFieldErrorMatcher();

  signUp(): void {
    const formValue = this.signUpForm.value;
    console.log(formValue);
  }
}
