import { AuthService, LoginContextInterface } from './../../../../core/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  private loading: boolean = false;
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
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
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
          ])]
    });
  }

  onSubmit() {
    this.router.navigate(['/']);
  }

  get f() { return this.form.controls; }

  onLogin() {
    if (this.f.invalid) {
      console.log('Invalid data');
      return;
    }

    const loginData: LoginContextInterface = {
      "username": this.f.username.value,
      "password": this.f.password.value
    }

    this.authService.internalLogin(loginData)
      .subscribe({
        next: (data: any) => {
          localStorage.setItem('token', JSON.stringify(data.body.token.token));
          this.router.navigate([`/admin`])
        },
        error: error => {
          //this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}
