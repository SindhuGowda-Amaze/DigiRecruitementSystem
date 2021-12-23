import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-applied-candidates',
  templateUrl: './applied-candidates.component.html',
  styleUrls: ['./applied-candidates.component.css']
})
export class AppliedCandidatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public Ondelete(id:any) {
    // this.DigipayrollServiceService.DeleteBanks(id).subscribe(
    //   data => {
    //     debugger
       Swal.fire('Deleted');
    //     this.GetBanks();
    //   }
    // )
  }

  public selected(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You want Shortlist this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  public rejected(){
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
}
