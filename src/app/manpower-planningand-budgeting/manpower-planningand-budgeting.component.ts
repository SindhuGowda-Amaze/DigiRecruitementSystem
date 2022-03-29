import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-manpower-planningand-budgeting',
  templateUrl: './manpower-planningand-budgeting.component.html',
  styleUrls: ['./manpower-planningand-budgeting.component.css']
})
export class ManpowerPlanningandBudgetingComponent implements OnInit {

  CompanyName: any;

  constructor(private DigipayrollServiceService: RecruitmentServiceService, private ActivatedRoute: ActivatedRoute) { }

  awardname: any;
  description: any;
  tenure: any;
  id: any;
  iD: any;
  awardlist: any;
  name: any;

  ngOnInit(): void {

    this.DigipayrollServiceService.GetRoleType().subscribe(data => {
      debugger
      this.Departmentlist = data;
    });
    this.ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != undefined && this.id != null) {

      }
    })

  }



  Departmentlist: any;
  HeadCount: any;
  Year: any;
  Remarks: any;
  Joborder: any;
  Department: any;
  Save() {
    debugger
    var entity = {
      'CompanyName': this.CompanyName,
      'Department_name': this.Department,
      'Joborder': this.Joborder,
      'HeadCount': this.HeadCount,
      'Year': this.Year,
      'Remarks': this.Remarks,
      'Role': this.Role,
    }
    this.DigipayrollServiceService.InsertManpowerPlanningandBudgeting(entity).subscribe(
      data => {
        Swal.fire("Saved Successfully");
        location.href = "#/ManpowerPlanningandBudgetingdash";

      }
    )
  }

  cancel() {
    location.href = "#/ManpowerPlanningandBudgetingdash";
  }

  Role: any;


}
