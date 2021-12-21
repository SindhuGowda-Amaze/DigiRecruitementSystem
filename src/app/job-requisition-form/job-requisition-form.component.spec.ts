import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRequisitionFormComponent } from './job-requisition-form.component';

describe('JobRequisitionFormComponent', () => {
  let component: JobRequisitionFormComponent;
  let fixture: ComponentFixture<JobRequisitionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobRequisitionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRequisitionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
