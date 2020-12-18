import { AdminService } from './../core/service/admin.service';
import { Component, OnInit } from '@angular/core';


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
    this.adminService.getUserList().subscribe((res: any) => {
      this.dataSource = res.body.data;
      console.log(res.body);

      this.dataSource.forEach((user: any) => {
        user.lastLogin = new Date(user.lastLogin).toDateString();
      });
    });
  }

}
