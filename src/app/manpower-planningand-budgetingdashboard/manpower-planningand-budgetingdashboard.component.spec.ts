import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManpowerPlanningandBudgetingdashboardComponent } from './manpower-planningand-budgetingdashboard.component';

describe('ManpowerPlanningandBudgetingdashboardComponent', () => {
  let component: ManpowerPlanningandBudgetingdashboardComponent;
  let fixture: ComponentFixture<ManpowerPlanningandBudgetingdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManpowerPlanningandBudgetingdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManpowerPlanningandBudgetingdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
