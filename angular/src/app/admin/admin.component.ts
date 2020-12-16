import { Router } from '@angular/router';
import { AdminService } from './../core/service/admin.service';
import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

interface TokenDecoded {
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
  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token') as string;
    const user = jwt_decode(token) as TokenDecoded;
    console.log(user.role);
    if (user.role != 'admin') {
      this.router.navigate(['/']);
    }
  }


  onProfileClick(): void {
    this.router.navigate(['/admin/profile'])
  }

  onClientsClick(): void {
    this.router.navigate(['/admin/clients'])
  }
}
