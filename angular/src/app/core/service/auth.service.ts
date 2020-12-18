import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import User from "src/app/data/interfaces/user.interface";
import { environment } from "src/environments/environment";
import { catchError } from 'rxjs/operators';
import { Router } from "@angular/router";
import { throwError } from "rxjs";

export interface LoginContextInterface {
  username: string;
  password: string;
}

export interface SignUpInternalContextInterface {
  email: string;
  username: string;
  password: string;
}

export interface LoginWithGG {
  idToken: string;
}

export interface UserToken {
  expiresIn: string;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<LoginContextInterface>({} as LoginContextInterface);
  public user = this.userSubject.asObservable();
  private apiUrl = `${environment.apiUrl}`;
  public isLogin: boolean = false;



  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    // this.userSubject = new BehaviorSubject<LoginContextInterface>(JSON.parse(localStorage.getItem('username')));
    this.user = this.userSubject.asObservable();
  }

  public setIsLogin(value: boolean) {
    this.isLogin = value;
  }

  public getIsLogin() {
    return this.isLogin;
  }

  public userEmitChange(usr: User) {
    this.userSubject.next(usr);
  }

  public get userValue(): LoginContextInterface {
    return this.userSubject.value;
  }

  public internalLogin = (
    loginContext: LoginContextInterface
  ) => {
    const url = `${environment.apiUrl}/auth/login/internal`;

    return this.http.post<LoginContextInterface>(url, loginContext, {
      observe: 'response' as 'response'
    })
      .pipe(
      );
  }

  public socialLogin = (
    loginGGContext: LoginWithGG
  ) => {
    const url = `${environment.apiUrl}/auth/login/social`;

    return this.http.post<LoginWithGG>(url, loginGGContext).pipe();
  }

  public register = async (
    signupContext: SignUpInternalContextInterface
  ): Promise<Observable<object>> => {
    const url = `${this.apiUrl}/auth/register/internal`;

    return this.http.post<SignUpInternalContextInterface>(
      url,
      signupContext,
      {
        observe: 'response'
      }
    ).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    )
  }

}
