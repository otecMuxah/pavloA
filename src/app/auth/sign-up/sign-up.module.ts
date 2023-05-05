import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatAutocompleteModule,
  MatButtonModule,
];

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
  ],
})
export class SignUpModule {}
