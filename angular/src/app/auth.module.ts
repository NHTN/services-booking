import { AuthComponent } from './components/auths/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AppMaterialModule } from './material.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/auths/login/login.component";
import { RegisterComponent } from "./components/auths/register/register.component";


@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
