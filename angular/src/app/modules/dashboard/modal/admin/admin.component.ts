import { Router } from '@angular/router';
import { AdminService } from '../../../../core/service/admin.service';
import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { AuthService } from '../../../../core/service/auth.service';

export interface TokenDecoded {
  id: string;
  role: string;
  iat: number;
  exp: number;
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private user: TokenDecoded;
  public userProfile: any;

  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private router: Router
  ) { }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/').then(() =>
      this.router.navigate([uri]));
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token') as string;
    console.log(token);
    if (!token) {
      this.authService.setIsLogin(false);
      this.redirectTo('/');
    }

    this.user = jwt_decode(token) as TokenDecoded;

    if (this.user.role !== 'admin') {
      this.authService.setIsLogin(false);
      this.redirectTo('/');
    }

    this.adminService.getUser(this.user.id).subscribe({
      next: (res: any) => {
        this.userProfile = res.body.data;
      },
      error: error => {
      }
    });
  }

  onProfileClick(): void {
    this.redirectTo(`/admin/profile/${this.user.id}`);
  }

  onClientsClick(): void {
    this.router.navigate(['/admin/clients', this.user.id]);
  }
}
