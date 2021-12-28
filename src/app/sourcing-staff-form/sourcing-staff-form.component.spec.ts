import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingStaffFormComponent } from './sourcing-staff-form.component';

describe('SourcingStaffFormComponent', () => {
  let component: SourcingStaffFormComponent;
  let fixture: ComponentFixture<SourcingStaffFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcingStaffFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingStaffFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
