import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { SocialLoginConfig } from './configs/social-login.config';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

import { HomeComponent } from './modules/home/modal/home/home.component';
import { BannerComponent } from './modules/home/modal/banner/banner.component';
import { HomeHeaderComponent } from './modules/home/modal/home-header/home-header.component';
import { ServicesListCardComponent } from './modules/home/modal/services-list-card/services-list-card.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './modules/auth/modal/auth.component';
import { LoginComponent } from './modules/auth/page/login/login.component';
import { RegisterComponent } from './modules/auth/page/register/register.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'auth', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [
    AppMaterialModule,
    BrowserModule,
    SocialLoginModule,
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    BannerComponent,
    HomeHeaderComponent,
    HomeComponent,
    ServicesListCardComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [SocialLoginConfig],
  bootstrap: [AppComponent],
  schemas: []
}
)
export class AppModule { }
