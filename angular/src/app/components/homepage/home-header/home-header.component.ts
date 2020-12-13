import { AuthStatusService } from './../../auths/auth-status.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  constructor(
    private route: Router,
    private authStatusService: AuthStatusService
  ) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.authStatusService.changeData(false);
    this.route.navigate(['/auth/register'])
  }

  onLogin() {
    this.authStatusService.changeData(true);
    this.route.navigate(['/auth/login'])
  }

}
