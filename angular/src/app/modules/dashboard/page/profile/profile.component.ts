import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { AdminService } from 'src/app/core/service/admin.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { Tracing } from 'trace_events';



interface UserProfile {
  firstname: string;
  lastname: string;
  gender: string;
  dateOfBirth: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public serializedDate = new FormControl((new Date()).toISOString());
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('userid') as string;

    this.adminService.getUser(id)
      .subscribe({
        next: (res: any) => {
          console.log(res.body.data);
          this.form = this.formBuilder.group({
            firstname: res.body.data.firstName,
            lastname: res.body.data.lastName,
            gender: res.body.data.gender,
            dOb: moment(new Date(res.body.data.dateOfBirth)).format('DD/MM/YYYY')
          });
        },
        error: error => {
        }
      });

  }

  onUpdate(): void {

  }
}
