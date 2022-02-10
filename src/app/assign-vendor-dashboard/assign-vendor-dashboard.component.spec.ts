import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignVendorDashboardComponent } from './assign-vendor-dashboard.component';

describe('AssignVendorDashboardComponent', () => {
  let component: AssignVendorDashboardComponent;
  let fixture: ComponentFixture<AssignVendorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignVendorDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignVendorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
