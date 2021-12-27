import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterStaffComponent } from './recruiter-staff.component';

describe('RecruiterStaffComponent', () => {
  let component: RecruiterStaffComponent;
  let fixture: ComponentFixture<RecruiterStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
