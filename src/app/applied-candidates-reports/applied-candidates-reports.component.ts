import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applied-candidates-reports',
  templateUrl: './applied-candidates-reports.component.html',
  styleUrls: ['./applied-candidates-reports.component.css']
})
export class AppliedCandidatesReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  refresh(){
    location.reload();
  }
}
