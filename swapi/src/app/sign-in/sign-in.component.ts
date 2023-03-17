import { Component } from '@angular/core';
import { IUser } from "./models/sign-in.model";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  user: IUser = {
    email: '',
    password: '',
  }

  hidePassword: boolean = true;

  saveDetails(): void {
    console.log(this.user);
  }
}
