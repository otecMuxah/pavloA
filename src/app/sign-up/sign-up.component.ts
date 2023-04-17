import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from './utils/sign-up.utils';
import { SignUpService } from './services/sign-up.service';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  switchMap,
} from 'rxjs';
import { ICountry } from './models/country.model';
import { EMAIL_REGEX } from './constants/sign-up.constants';

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
      email: [
        '',
        { validators: [Validators.required, Validators.pattern(EMAIL_REGEX)] },
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    },
    { validators: passwordMatchValidator }
  );

  ngOnInit(): void {
    this.initCountries();
  }

  private initCountries(): void {
    this.countries$ = this.signUpForm.controls.country.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      map((country: string | null) => {
        const countryName = country?.split(' ')[1];
        return countryName ? countryName.toLowerCase() : country;
      }),
      distinctUntilChanged(),
      switchMap((countryName: string | null) =>
        this.getCountries(countryName || '')
      )
    );
  }

  private getCountries(countryName: string): Observable<ICountry[]> {
    return this.signUpService.getCountries(countryName);
  }

  signUp(): void {
    const formValue = this.signUpForm.value;
    console.log(formValue);
  }
}
