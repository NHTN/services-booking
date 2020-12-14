import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";

export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>({} as any);
  public currentUser = this.currentUserSubject.asObservable();
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(
    private httpClient: HttpClient
  ) {

  }

  googleLogin(user: any) {
    console.log(
      this.httpClient.post(`${this.apiUrl}/login/social`, user)
    );
  }
}
