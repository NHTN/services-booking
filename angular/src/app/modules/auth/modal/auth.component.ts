import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService,
  ) {
  }

  ngOnInit(): void {
  }

  loginInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(googleUser => {
      console.log(googleUser)
    })
  }



}



