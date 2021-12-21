import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledInterviewsReportsComponent } from './scheduled-interviews-reports.component';

describe('ScheduledInterviewsReportsComponent', () => {
  let component: ScheduledInterviewsReportsComponent;
  let fixture: ComponentFixture<ScheduledInterviewsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledInterviewsReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledInterviewsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
