import { ClientsListComponent } from './clients-list/clients-list.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './modules/home/page/home/home.component';
import { VerifyEmailComponent } from './modules/auth/page/verify-email/verify-email.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';

import { SocialLoginConfig } from './configs/social-login.config';

import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

import { BannerComponent } from './modules/home/modal/banner/banner.component';
import { HomeHeaderComponent } from './modules/home/modal/home-header/home-header.component';
import { ServicesListCardComponent } from './modules/home/modal/services-list-card/services-list-card.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './modules/auth/modal/auth.component';
import { LoginComponent } from './modules/auth/page/login/login.component';
import { RegisterComponent } from './modules/auth/page/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalHttpInterceptorService } from './core/interceptor/global-http.interceptor';
import { GlobalErrorHandlerService } from './core/service/global-error-handler.service';
import { ProfileComponent } from './modules/profile/page/profile/profile.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'auth', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent, },
      { path: 'verify-email', component: VerifyEmailComponent }
    ]
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: 'clients', component: ClientsListComponent
      },
      {
        path: 'profile', component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    HttpClientModule,
    AppMaterialModule,
    ReactiveFormsModule,
    BrowserModule,
    SocialLoginModule,
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    ClientsListComponent,
    FooterComponent,
    MainLayoutComponent,
    BannerComponent,
    HomeHeaderComponent,
    ServicesListCardComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    HomeComponent,
    AdminComponent,
  ],
  providers: [
    SocialLoginConfig,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptorService,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent],
  schemas: []
}
)
export class AppModule { }
