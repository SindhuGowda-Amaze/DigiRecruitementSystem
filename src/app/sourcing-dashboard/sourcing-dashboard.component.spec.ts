import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingDashboardComponent } from './sourcing-dashboard.component';

describe('SourcingDashboardComponent', () => {
  let component: SourcingDashboardComponent;
  let fixture: ComponentFixture<SourcingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcingDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
