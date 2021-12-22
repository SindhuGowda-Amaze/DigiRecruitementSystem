import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-offered-candidates',
  templateUrl: './offered-candidates.component.html',
  styleUrls: ['./offered-candidates.component.css']
})
export class OfferedCandidatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

 Joined(){
    Swal.fire('Are you Sure?')
  }
  Dropped(){
    Swal.fire('Punched Out Succesfully')
  }


}
