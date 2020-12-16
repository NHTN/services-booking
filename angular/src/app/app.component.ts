import { AuthService, LoginContextInterface } from './core/service/auth.service';
import { Component } from '@angular/core';
import User from './data/interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: LoginContextInterface;

  constructor(
    private authService: AuthService
  ) {
    this.authService.user.subscribe(x => this.user = x);
  }
}
