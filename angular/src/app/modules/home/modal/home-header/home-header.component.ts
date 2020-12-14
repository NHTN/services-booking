import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  constructor(
    private route: Router
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
