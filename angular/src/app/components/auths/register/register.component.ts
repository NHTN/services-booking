import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private route: Router) { }

  ngOnInit(
  ): void {
  }

  onSubmit() {
    this.route.navigate(['/login'])
  }

}
