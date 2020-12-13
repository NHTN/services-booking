import { AuthModule } from './auth.module';
import { AuthRoutingModule } from './auth-routing.module';

import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './material.module';
import { AuthComponent } from './components/auths/auth/auth.component';
import { LoginComponent } from './components/auths/login/login.component';
import { RegisterComponent } from './components/auths/register/register.component';
import { BannerComponent } from './components/homepage/banner/banner.component';
import { HomeHeaderComponent } from './components/homepage/home-header/home-header.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { MainContentComponent } from './components/layouts/main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    BannerComponent,
    MainContentComponent,
    HomeHeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
}
)
export class AppModule { }
