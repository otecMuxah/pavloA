import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  const passwordsMatch = password && confirmPassword && password.value === confirmPassword.value
  if (!passwordsMatch) confirmPassword?.setErrors({mismatch: true})

  return passwordsMatch ? null : {mismatch: true};
};
