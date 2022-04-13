import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BUHeadDashComponent } from './buhead-dash.component';

describe('BUHeadDashComponent', () => {
  let component: BUHeadDashComponent;
  let fixture: ComponentFixture<BUHeadDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BUHeadDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BUHeadDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
