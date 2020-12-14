import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import User from "src/app/data/interfaces/user.interface";
import { environment } from "src/environments/environment";
import { share } from 'rxjs/operators';

interface LoginContextInterface {
  username: string;
  password: string;
  token: string;
}

export interface SignUpInternalContextInterface {
  email: string;
  username: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable();
  private apiUrl = `${environment.apiUrl}`

  constructor(
    private httpClient: HttpClient
  ) {
  }

  login(loginContext: LoginContextInterface) {
    // return this.http.post<User>(, { username, password })
    //   .pipe(map(user => {
    //     localStorage.setItem('user', JSON.stringify(user));
    //     this.userSubject.next(user);
    //     return user;
    //   }));
  }

  register = async (signupContext: SignUpInternalContextInterface) => {
    const url = `${this.apiUrl}/auth/register/internal`;
    const header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*')


    return this.httpClient.post<SignUpInternalContextInterface>(
      url,
      signupContext,
      {
        headers: header
      }
    )
      .subscribe(data => console.log(data))
  }

}
