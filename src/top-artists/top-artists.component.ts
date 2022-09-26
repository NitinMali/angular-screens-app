import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.css'],
})
export class TopArtistsComponent implements OnInit {
  signUpForm = {} as FormGroup;
  loginForm = {} as FormGroup;
  signSubmit = false;
  submitted = false;
  hide = false;
  signHide = false;
  role = [
    { id: 1, name: 'Manager' },
    { id: 2, name: 'Hr' },
    { id: 3, name: 'Ceo' },
    { id: 4, name: 'Director' },
    { id: 5, name: 'Client' },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createLoginForm();
    this.createSignUpForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  createSignUpForm() {
    this.signUpForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', Validators.required],
        gender: ['', Validators.required],
        date: ['', Validators.required],
        role: [, Validators.required],
        passWord: ['', [Validators.required, Validators.minLength(6)]],
        ConfirmPass: ['', [Validators.required, Validators.minLength(6)]],
      },
      {
        validators: () => {
          if (
            this.signUpForm?.controls?.passWord.value !=
            this.signUpForm?.controls?.ConfirmPass.value
          ) {
            console.log('hello');
            this.signUpForm.controls.ConfirmPass.setErrors({
              passMisMatch: true,
            });
          }
          console.log('hello');
        },
      }
    );
  }

  get allControls() {
    return this.loginForm.controls;
  }

  onSubmit(data: any) {
    this.submitted = true;
    console.log('login');
    console.log(data?.controls.email.value);
  }

  get signControls() {
    return this.signUpForm.controls;
  }

  onSign(value: any) {
    this.signSubmit = true;
    console.log(value);
  }
}
