// import { AuthService } from './../service/auth.service';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';

// import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { of } from 'rxjs/observable';

// @Injectable({
//   providedIn: 'root',
// })
// export class RequestInterceptor implements HttpInterceptor {

//   constructor(
//     private readonly auth: AuthService,
//     private readonly router: Router,
//   ) {
//   }

//   /**
//    * @param HttpRequest<any> request - The intercepted request
//    * @param HttpHandler next - The next interceptor in the pipeline
//    * @return Observable<HttpEvent<any>>
//    */
//   public intercept = (
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ) => {
//     //: Observable<HttpEvent<any>>
//     request = this.addToken(request);
//     return next.handle(request)
//       // add error handling
//       .pipe(
//         catchError(
//           (error: any, caught: Observable<HttpEvent<any>>) => {
//             if (error.status === 401) {
//               this.handleAuthError();
//               return of(error);
//             }
//             throw error;
//           }
//         ),
//       );
//   }

//   /**
//    * Handle API authentication errors.
//    */
//   private handleAuthError() {
//     // clear stored credentials; they're invalid
//     //  this.auth.credentials = null;
//     // navigate back to the login page
//     this.router.navigate(['/login']);
//   }

//   /**
//    * Add stored auth token to request headers.
//    * @param HttpRequest<any> request - the intercepted request
//    * @return HttpRequest<any> - the modified request
//    */
//   // private addToken(request: HttpRequest<any>): HttpRequest<any> {
//   // //  const token: string = this.auth.token;
//   //   if (token) {
//   //     return request.clone({
//   //       setHeaders: {
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //     });
//   //   }
//   //   return request;
// }

// }
