import { AuthComponent } from './components/auths/auth/auth.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/auths/login/login.component";
import { RegisterComponent } from "./components/auths/register/register.component";
import { AppMaterialModule } from './material.module';

const ROUTES: Routes = [
  {
    path: '/', component: AuthComponent,
    children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [AppMaterialModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
