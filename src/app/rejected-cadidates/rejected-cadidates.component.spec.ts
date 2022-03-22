import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedCadidatesComponent } from './rejected-cadidates.component';

describe('RejectedCadidatesComponent', () => {
  let component: RejectedCadidatesComponent;
  let fixture: ComponentFixture<RejectedCadidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedCadidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedCadidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
