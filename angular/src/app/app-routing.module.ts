import { BannerComponent } from './components/homepage/banner/banner.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auths/auth/auth.component';
import { LoginComponent } from './components/auths/login/login.component';
import { RegisterComponent } from './components/auths/register/register.component';
import { AuthModule } from './auth.module';

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
  imports: [AppMaterialModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
