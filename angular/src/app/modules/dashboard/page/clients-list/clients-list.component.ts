import { AdminService } from '../../../../core/service/admin.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {
  dataSource = [];
  displayedColumns: string[] = ['fullname', 'email', 'last-login'];
  constructor(
    private adminService: AdminService
  ) { }


  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(): void {

    const token = localStorage.getItem('token')

    if (token) {
      document.cookie = `Authorization=${token}`;
    }

    this.adminService.getUserList().subscribe((res: any) => {
      this.dataSource = res.body.data;

      this.dataSource.forEach((user: any) => {
        user.lastLogin = moment(new Date(user.lastLogin).toDateString()).format('hh:mm:ss DD/MM/YYYY');
      });
    });
  }

}
