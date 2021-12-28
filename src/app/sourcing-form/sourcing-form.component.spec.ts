import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcingFormComponent } from './sourcing-form.component';

describe('SourcingFormComponent', () => {
  let component: SourcingFormComponent;
  let fixture: ComponentFixture<SourcingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
