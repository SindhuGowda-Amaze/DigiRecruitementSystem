import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingStaffDashboardComponent } from './sourcing-staff-dashboard.component';

describe('SourcingStaffDashboardComponent', () => {
  let component: SourcingStaffDashboardComponent;
  let fixture: ComponentFixture<SourcingStaffDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcingStaffDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingStaffDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
