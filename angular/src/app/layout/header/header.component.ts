import jwt_decode from 'jwt-decode';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenDecoded } from 'src/app/modules/dashboard/modal/admin/admin.component';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnChanges {
  public token: string = '';
  constructor(
    private router: Router,
    public authService: AuthService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    const match = document.cookie.match(new RegExp('(^| )' + `Authorization` + '=([^;]+)'));
    if (match) {
      this.token = match[2];
    };

    if (this.token) {
      this.authService.setIsLogin(true);
    } else {
      this.authService.setIsLogin(false);
    }
  }


}
