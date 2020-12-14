import { AuthStatusService } from './../auth-status.service';
import { Router } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnChanges {
  constructor(
    private router: Router,
    private authStatusService: AuthStatusService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    // this.authStatusService.currentData.subscribe(res => {
    //   console.log(res)
    //   if (res) {
    //     this.router.navigate(['auth/login'])
    //   } else {
    //     this.router.navigate(['auth/register'])
    //   }
    // })
  }



}
