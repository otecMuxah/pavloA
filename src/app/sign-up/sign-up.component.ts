import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {passwordMatchValidator} from "./utils/sign-up.utils";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {
  hideEmail: boolean = true;
  hideConfirmEmail: boolean = true;
  private fb = inject(FormBuilder);
  signUpForm = this.fb.group({
      email: ['', {validators: [Validators.required, Validators.email]}],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    },
    {validators: passwordMatchValidator}
  );

  signUp(): void {
    const formValue = this.signUpForm.value;
    console.log(formValue);
  }
}
