import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/guard/auth.guard";
import { AuthComponent } from "./modules/auth/modal/auth-layout/auth.component";
import { LoginComponent } from "./modules/auth/page/login/login.component";
import { RegisterComponent } from "./modules/auth/page/register/register.component";
import { VerifyEmailComponent } from "./modules/auth/page/verify-email/verify-email.component";
import { AdminComponent } from "./modules/dashboard/modal/admin/admin.component";
import { ClientsListComponent } from "./modules/dashboard/page/clients-list/clients-list.component";
import { ProfileComponent } from "./modules/dashboard/page/profile/profile.component";
import { HomeComponent } from "./modules/home/page/home/home.component";

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
    canActivate: [AuthGuard],
    children: [
      {
        path: 'clients/:userid', component: ClientsListComponent
      },
      {
        path: 'profile/:userid', component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
