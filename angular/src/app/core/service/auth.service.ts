import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import User from "src/app/data/interfaces/user.interface";
import { environment } from "src/environments/environment";


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

export class AuthService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable();
  private apiUrl = `${environment.apiUrl}`;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  googleLogin(user: any) {
    console.log(
      this.httpClient.post(`${this.apiUrl}/login/social`, user)
    )
  }


  login(loginContext: LoginContextInterface) {
    // return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
    //   .pipe(map(user => {
    //     localStorage.setItem('user', JSON.stringify(user));
    //     this.userSubject.next(user);
    //     return user;
    //   }));
  }

  register(signupContext: SignUpInternalContextInterface) {
    const url = `${this.apiUrl}/auth/register/internal`;
    return this.httpClient.post(url, signupContext).pipe();
  }

}
