import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStatusService {

  private dataSource = new BehaviorSubject<Boolean>(false);
  currentData = this.dataSource.asObservable();


  private activeStateData = new BehaviorSubject<Boolean>(false);
  currentActive = this.activeStateData.asObservable();
  constructor() {
  }

  changeData(data: Boolean) {
    this.dataSource.next(data);
  }

  aciveState(state: Boolean) {
    this.activeStateData.next(state);
  }
}
