import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from './utils/sign-up.utils';
import { SignUpService } from './services/sign-up.service';
import { Observable } from 'rxjs';
import { ICountry } from './models/country.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly signUpService = inject(SignUpService);

  countries$!: Observable<ICountry[]>;
  hideEmail = true;
  hideConfirmEmail = true;
  signUpForm = this.fb.group(
    {
      email: ['', { validators: [Validators.required, Validators.email] }],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    },
    { validators: passwordMatchValidator }
  );

  ngOnInit(): void {
    this.countries$ = this.signUpService.getCountries();
  }

  signUp(): void {
    const formValue = this.signUpForm.value;
    console.log(formValue);
  }
}
