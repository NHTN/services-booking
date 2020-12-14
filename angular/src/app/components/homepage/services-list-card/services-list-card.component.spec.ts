import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesListCardComponent } from './services-list-card.component';

describe('ServicesListCardComponent', () => {
  let component: ServicesListCardComponent;
  let fixture: ComponentFixture<ServicesListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
