import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduled-interviews-reports',
  templateUrl: './scheduled-interviews-reports.component.html',
  styleUrls: ['./scheduled-interviews-reports.component.css']
})
export class ScheduledInterviewsReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  refresh(){
    location.reload();
  }
}
