import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from '../sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from "@angular/material/select";
import { RouterTestingModule } from "@angular/router/testing";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatSelectModule,
        RouterTestingModule,
        MatAutocompleteModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
