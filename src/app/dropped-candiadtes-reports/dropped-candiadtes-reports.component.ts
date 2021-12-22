import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropped-candiadtes-reports',
  templateUrl: './dropped-candiadtes-reports.component.html',
  styleUrls: ['./dropped-candiadtes-reports.component.css']
})
export class DroppedCandiadtesReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  refresh(){
    location.reload();
  }
}
