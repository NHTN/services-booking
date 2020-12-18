import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  constructor(
    private route: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.route.navigate(['/auth/register'])
  }

  onLogin() {
    this.route.navigate(['/auth/login'])
  }

}
