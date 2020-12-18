import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  public getUserList = (): Observable<object> => {
    const url = `${this.apiUrl}/users`;

    return this.http.get(
      url,
      {
        withCredentials: true,
        observe: 'response' as 'response'
      }
    ).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  public getUser = (userid: string): Observable<object> => {
    const url = `${this.apiUrl}/users/username`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<object>(
      url,
      { id: userid },
      {
        headers: headers,
        withCredentials: true,
        observe: 'response' as 'response'
      }
    ).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
