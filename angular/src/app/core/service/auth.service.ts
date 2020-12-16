import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import User from "src/app/data/interfaces/user.interface";
import { environment } from "src/environments/environment";
import { catchError, map } from 'rxjs/operators';
import { Router } from "@angular/router";
import { ErrorStateMatcher } from "@angular/material/core";
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
<<<<<<< HEAD
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable();
  // apiUrl = `${environment.apiUrl}`;
=======
  private userSubject = new BehaviorSubject<LoginContextInterface>({} as LoginContextInterface);
  public user = this.userSubject.asObservable();
  private apiUrl = `${environment.apiUrl}`;
>>>>>>> origin/users

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    // this.userSubject = new BehaviorSubject<LoginContextInterface>(JSON.parse(localStorage.getItem('username')));
    this.user = this.userSubject.asObservable();
  }

<<<<<<< HEAD
  // googleLogin(user: any) {
  //   console.log(
  //     this.httpClient.post(`${this.apiUrl}/login/social`, user)
  //   )
  // }


  // login(loginContext: LoginContextInterface) {
  //   // return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
  //   //   .pipe(map(user => {
  //   //     localStorage.setItem('user', JSON.stringify(user));
  //   //     this.userSubject.next(user);
  //   //     return user;
  //   //   }));
  // }

  // register(signupContext: SignUpInternalContextInterface) {
  //   const url = `${this.apiUrl}/auth/register/internal`;
  //   return this.httpClient.post(url, signupContext).pipe();
  // }
=======
  public get userValue(): LoginContextInterface {
    return this.userSubject.value;
  }

  public internalLogin = (
    loginContext: LoginContextInterface
  ) => {
    const url = `${environment.apiUrl}/auth/login/internal`;

    return this.http.post<LoginContextInterface>(url, loginContext, {
      observe: 'response'
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
>>>>>>> origin/users

  register = async (
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
