import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledInterviewCalenderComponent } from './scheduled-interview-calender.component';

describe('ScheduledInterviewCalenderComponent', () => {
  let component: ScheduledInterviewCalenderComponent;
  let fixture: ComponentFixture<ScheduledInterviewCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledInterviewCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledInterviewCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
