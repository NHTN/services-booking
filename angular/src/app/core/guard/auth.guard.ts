import { Injectable } from '@angular/core';
import { AuthService } from './../service/auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private accountService: AuthService
  ) { }

  public canActivate = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean => {
    const isLogin = this.accountService.isLogin;
    if (isLogin) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/'], {
      queryParams: {
        returnUrl: state.url
      }
    });
    return false;
  }
}
