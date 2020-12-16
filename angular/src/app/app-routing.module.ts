import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './material.module';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './modules/auth/modal/auth.component';
import { HomeComponent } from './modules/home/page/home/home.component';
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
  },
  {
    path: 'admin', component: AdminComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
