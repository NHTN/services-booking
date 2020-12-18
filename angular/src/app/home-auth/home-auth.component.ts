import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-home-auth',
  templateUrl: './home-auth.component.html',
  styleUrls: ['./home-auth.component.scss']
})
export class HomeAuthComponent implements OnInit {

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onDashboard(): void {
    this.router.navigate(['/admin']);
  }

  onLogout(): void {
    localStorage.removeItem('token');
    // document.cookie = 'Authorization=; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    this.authService.setIsLogin(false);
    this.router.navigate(['/auth/login']);
  }

}
