import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from 'src/app/core/service/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private loading: Boolean = false;
  public isLogin: Boolean = false;
  constructor(
    public router: Router,
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
  ) {
  }

  ngOnInit(): void {
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }


  loginInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(googleUser => {
      console.log(googleUser)
      this.authService.socialLogin({ idToken: googleUser.idToken })
        .pipe(first())
        .subscribe({
          next: () => {
            this.isLogin = true;
            this.redirectTo('/');
          },
          error: error => {
            this.loading = false;
          }
        });
    })
  }



}



