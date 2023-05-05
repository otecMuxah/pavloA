import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

const materialModules = [
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
];

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule, FormsModule, ...materialModules],
})
export class SignInModule {}
