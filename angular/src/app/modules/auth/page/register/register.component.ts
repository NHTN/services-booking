import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as _ from 'lodash';
import { AuthService, SignUpInternalContextInterface } from './../../../../core/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  private loading: boolean = false;
  private errorMessage: string = "";

  public ACCOUNT_VALIDATION_MESSAGE = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 6 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 20 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ]
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  get f() { return this.form.controls; }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        Validators.compose(
          [
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ]
        )],
      username: [
        '',
        Validators.compose(
          [
            Validators.maxLength(20),
            Validators.minLength(6),
            Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
            Validators.required
          ])],
      password: [
        '',
        Validators.compose(
          [
            Validators.minLength(6),
            Validators.required,
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
          ])],
      confirmPassword: [
        '',
        Validators.compose(
          [
            Validators.minLength(6),
            Validators.required,
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
          ])]
    });
  }



  public onRegister = async () => {
    this.loading = true;
    this.errorMessage = '';

    const userSignup = {
      "username": this.f.username.value as string,
      "email": this.f.email.value as string,
      "password": this.f.password.value as string,
    } as SignUpInternalContextInterface;

    if (this.form.invalid) {
      console.log('Invalid data');
      return;
    }

    (await this.authService.register(userSignup))
      .subscribe(
        (response) => {
          if (_.isEqual(_.get(response, "status"), 201)) {
            return this.router.navigate(['auth/verify-email'],);
          }
        },
        (error) => {
          this.errorMessage = error;
          console.log(this.errorMessage)
          this.loading = false;
          throw error;
        }
      );
  }

}
