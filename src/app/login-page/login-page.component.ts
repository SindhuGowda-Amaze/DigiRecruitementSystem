
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  roledid: any;
  result: any;
  roleID: any;
  userName: any;
  password: any;
  username: any;
  loginTypeList: any;
  companycode: any
  showpassword: any;

  name:any;

  constructor(public RecruitmentServiceService: RecruitmentServiceService, private router: Router) { }

  ngOnInit(): void {
    this.showpassword = 0;
    if (localStorage.getItem('temp') == '1') {
      localStorage.clear();
      location.reload();

    }
    this.GetLoginTypeMaster();
  }

  Showhidepassword() {
    debugger
    if (this.showpassword == 0) {
      this.showpassword = 1;
    }
    else {
      this.showpassword = 0;
    }
  }

  public getcompanycode() {
    debugger
    localStorage.setItem('companycode', this.companycode);
    if (this.companycode == 1001) {
      localStorage.setItem('apiurl', 'http://103.133.214.197/digiOfficeV4API');

    }
    else if (this.companycode == 1002) {
      localStorage.setItem('apiurl', 'http://103.133.214.197/Dynamic_NCNDAAPI');
    }
  }
  GetLoginTypeMaster() {

    this.RecruitmentServiceService.GetLoginTypeMaster().subscribe(data => {

      this.loginTypeList = data;
    })
  }
  public getRoleID(even: any) {
    debugger
    this.roleID = even.target.value;
  }

  // public login() {
  //   localStorage.setItem('temp', '1');
  //   localStorage.setItem('roleid', '1');
  //  routerLink = "#/Home";
  //   location.reload();

  // }

  public login() {

    if (this.userName == 'admin' && this.password == '1') {
      debugger
      sessionStorage.setItem('UserName', 'admin');
      sessionStorage.setItem('temp', '1');
      sessionStorage.setItem('role', 'Admin');
      // this.router.navigate(["/Dashboard"]);
      location.href = "#/AdminDashboard"
      sessionStorage.setItem('roleid', '1');
      location.reload();


    }
    else if (this.roleID == 6) {
      this.RecruitmentServiceService.GetRecruiterStaff().subscribe(data => {
        let temp: any = data.filter(x => (x.email == this.userName || x.phoneNo == this.userName) && x.password == this.password && x.enable_Disable==false);
        this.result = temp[0];
        debugger;
        // this.loader = true;
        if (this.result != undefined || this.result != null) {
          sessionStorage.setItem('UserName', this.result.name);
          sessionStorage.setItem('userid', this.result.id);
          sessionStorage.setItem('temp', '1');
          sessionStorage.setItem('role', 'recruiter');
          sessionStorage.setItem('roleid', '6');
          location.href = "#/Dashboard";
          location.reload();


        }
        else {
          Swal.fire('Username or Password is Invalid User is Disabled');
          this.userName = "";
          this.password = "";
        }

      })

    }



    else if (this.roleID == 4) {
      this.RecruitmentServiceService.GetClientMaster().subscribe(data => {
        let temp: any = data.filter(x => (x.phoneNo == this.userName || x.email == this.userName) && x.password == this.password);
        this.result = temp[0];
        debugger;
        // this.loader = true;
        if (this.result != undefined || this.result != null) {
          sessionStorage.setItem('UserName', this.result.name);
          sessionStorage.setItem('userid', this.result.id);
          sessionStorage.setItem('temp', '1');
          sessionStorage.setItem('role', 'Client');
          sessionStorage.setItem('roleid', '4');
          location.href = "#/Dashboard";
          location.reload();


        }
        else {
          Swal.fire('Username or Password is Invalid');
          this.userName = "";
          this.password = "";
        }

      })

    }




    else if (this.roleID == 3) {
      this.RecruitmentServiceService.GetVendor_Dasboard().subscribe(data => {
        let temp: any = data.filter(x => (x.phone_Number == this.userName || x.email_ID == this.userName) && x.password == this.password);
        this.result = temp[0];
        debugger;
        // this.loader = true;
        if (this.result != undefined || this.result != null) {
          sessionStorage.setItem('UserName', this.result.vendor_Name);
          sessionStorage.setItem('userid', this.result.id);
          sessionStorage.setItem('temp', '1');
          sessionStorage.setItem('role', 'Vendor');
          sessionStorage.setItem('roleid', '3');
          sessionStorage.setItem('notes', this.result.notes);
          location.href = "#/Dashboard";
          location.reload();


        }
        else {
          Swal.fire('Username or Password is Invalid');
          this.userName = "";
          this.password = "";
        }

      })

    }


















    // for vendor login
    else if (this.roleID == 7) {
      debugger;
      this.RecruitmentServiceService.GetVendor_Staff().subscribe(data => {
        // this.result = data;
        let temp: any = data.filter(x => (x.phone_Number == this.userName || x.email_ID == this.userName) && x.password == this.password && x.enable_Disable==false);
        this.result = temp[0];
        // this.result = data.filter(x => x.loginTypeID == 7);
        debugger;
        if (this.result != undefined || this.result != null) {
          localStorage.setItem('temp', '1');
          localStorage.setItem('roleid', '7');
          localStorage.setItem('vendorid', this.result.id);
          localStorage.setItem('staffID', this.result.staffID);
          localStorage.setItem('buildingID', this.result.buildingID);
          localStorage.setItem('userRoleID', this.result.userRoleID);
          localStorage.setItem('userName', this.result.loginName);
          localStorage.setItem('name', this.result.name);
          localStorage.setItem('phoneNo', this.result.phoneNo);
          localStorage.setItem('userName', this.result.emailID);
          localStorage.setItem('password', this.result.password);
          localStorage.setItem('projectName', this.result.projectName);

          // this.router.navigate(["/Dashboard"]);
          location.href = "#/Dashboard"
          location.reload();


        }
        else {
          Swal.fire('Username or Password is Invalid or User is Disabled');
          this.userName = "";
          this.password = "";
        }

      })

    }

    //     else {
    //       Swal.fire('Phonenumber or Password is invalid');
    //       this.userName = "";
    //       this.password = "";
    //     }
    //   })
    // }



    //for staff login
    // else if (this.roleID == 8) {
    //   debugger
    //   this.RecruitmentServiceService.GetUsersdetailsForHRLogin(this.userName, this.password).subscribe(data => {
    //     debugger
    //     // this.result = data.filter(x => x.loginTypeID == 8);
    //     this.result = data;

    //     if (this.result != undefined || this.result != undefined) {
    //       localStorage.setItem('temp', '1');
    //       localStorage.setItem('roleid', '8');
    //       localStorage.setItem('staffId', this.result.staffID);
    //       localStorage.setItem('buildingID', this.result.buildingID);
    //       localStorage.setItem('userRoleID', this.result.userRoleID);
    //       localStorage.setItem('userName', this.result.loginName);
    //       localStorage.setItem('name', this.result.name);
    //       localStorage.setItem('phoneNo', this.result.phoneNo);
    //       localStorage.setItem('userName', this.result.emailID);
    //       localStorage.setItem('loginTypeID', this.result.loginTypeID);
    //       localStorage.setItem('password', this.result.password);
    //       location.href="/ScheduledInterviews"
    //       // this.router.navigate(["/ScheduledInterviews"]);
    //       // location.reload();
    //     }
    //     else {

    //       Swal.fire('Phonenumber or Password is invalid');
    //       this.userName = "";
    //       this.password = "";
    //     }
    //   })
    // }

    //for hiring manager login
    // else if (this.roleID == 9) {
    //   debugger
    //   this.RecruitmentServiceService.GetUsersdetailsForHRLogin(this.userName, this.password).subscribe(data => {
    //     debugger
    //     this.result = data;
    //     if (this.result != undefined || this.result != undefined) {
    //       localStorage.setItem('temp', '1');
    //       localStorage.setItem('roleid', '9');
    //       localStorage.setItem('staffID', this.result.staffID);
    //       localStorage.setItem('buildingID', this.result.buildingID);
    //       localStorage.setItem('userRoleID', this.result.userRoleID);
    //       localStorage.setItem('userName', this.result.loginName);
    //       localStorage.setItem('name', this.result.name);
    //       localStorage.setItem('phoneNo', this.result.phoneNo);
    //       localStorage.setItem('userName', this.result.emailID);
    //       localStorage.setItem('loginTypeID', this.result.loginTypeID);
    //       localStorage.setItem('password', this.result.password);
    //       location.href="/Dashboard"
    //       // this.router.navigate(["/Dashboard"]);
    //       // location.reload();
    //     }
    //     else {

    //       Swal.fire('Phonenumber or Password is invalid');
    //       this.userName = "";
    //       this.password = "";
    //     }
    //   })
    // }



    // if (this.userName == 'vendor' && this.password == '1') {
    //   debugger
    //   localStorage.setItem('userName', 'vendor');
    //   localStorage.setItem('temp', '1');
    //   this.router.navigate(["/Dashboard"])  ;
    //   localStorage.setItem('roleid', '7');
    //   // location.reload();
    // }

    // else if (this.roleID == 1) {

    //   this.RecruitmentServiceService.GetUsersdetailsForReceptionistLogin(this.userName, this.password).subscribe(data => {
    //     this.result = data;

    //     if ((this.result!=undefined || this.result!=null)) {
    //       localStorage.setItem('managerID', this.result.id);
    //       localStorage.setItem('staffID',this.result.staffID);
    //       localStorage.setItem('buildingID',this.result.buildingID);
    //       localStorage.setItem('userRoleID',this.result.userRoleID);
    //       localStorage.setItem('userName', this.result.loginName);
    //       localStorage.setItem('name', this.result.name);
    //       localStorage.setItem('phoneNo', this.result.phoneNo);
    //       localStorage.setItem('userName', this.result.emailID);
    //       localStorage.setItem('password', this.result.password);
    //       localStorage.setItem('temp', '1');
    //       localStorage.setItem('roleid', '1');
    //      routerLink = "#/LoginDashboard";
    //       location.reload();
    //     }
    //     else {

    //       Swal.fire('Phonenumber or Password is invalid');
    //       this.userName = "";
    //       this.password = "";
    //     }
    //   })
    // }

    //recruiter login
    // else if (this.roleID == 2) {
    //   debugger;
    //   this.RecruitmentServiceService.GetUsersdetailsForHRLogin(this.userName, this.password).subscribe(data => {
    //     this.result = data;
    //     // this.result = data.filter(x => x.loginTypeID == 2);
    //     debugger;
    //     if (this.result != undefined || this.result != null) {
    //       localStorage.setItem('temp', '1');
    //       localStorage.setItem('roleid', '2');
    //       localStorage.setItem('hrID', this.result.id);
    //       localStorage.setItem('staffID', this.result.staffID);
    //       localStorage.setItem('buildingID', this.result.buildingID);
    //       localStorage.setItem('userRoleID', this.result.userRoleID);
    //       localStorage.setItem('userName', this.result.loginName);
    //       localStorage.setItem('name', this.result.name);
    //       localStorage.setItem('phoneNo', this.result.phoneNo);
    //       localStorage.setItem('userName', this.result.emailID);
    //       localStorage.setItem('password', this.result.password);
    //       localStorage.setItem('projectName', this.result.projectName);

    //       // location.reload();
    //       // this.router.navigate(["/Dashboard"]);
    //       location.href="/Dashboard"

    //     }
    //     else {

    //       Swal.fire('Phonenumber or Password is invalid');
    //       this.userName = "";
    //       this.password = "";
    //     }
    //   })
    // }

    // else if (this.roleID == 3) {
    //   debugger
    //   this.RecruitmentServiceService.GetUsersdetailsMob(this.userName, this.password).subscribe(data => {
    //     this.result = data;
    //     debugger
    //     if (this.result != undefined || this.result != null) {
    //       localStorage.setItem('staffID', this.result.id);
    //       localStorage.setItem('staffssID', this.result.id);
    //       localStorage.setItem('name', this.result.name)
    //       localStorage.setItem('userName', this.result.loginName);
    //       localStorage.setItem('phoneNo', this.result.phoneNo);
    //       //localStorage.setItem('name', this.result.name);
    //       localStorage.setItem('supervisor', this.result.supervisor);
    //       localStorage.setItem('userName', this.result.emailID);
    //       localStorage.setItem('password', this.result.password);
    //       localStorage.setItem('BuildingID', this.result.building);
    //       localStorage.setItem('userRoleID', this.result.roleType);
    //       localStorage.setItem('projectName', this.result.projectName);
    //       localStorage.setItem('UserID', this.result.id)
    //       localStorage.setItem('temp', '1');
    //       localStorage.setItem('roleid', '3');
    //       this.router.navigate(["/Dashboard"]);
    //       // location.reload();
    //     }
    //     else {

    //       Swal.fire('Phonenumber or Password is invalid');
    //       this.userName = "";
    //       this.password = "";
    //     }
    //   })
    // }


    else if (this.roleID == 5) {
      this.RecruitmentServiceService.GetClientStaff().subscribe(data => {
        
        let temp: any = data.filter(x => (x.phoneNo == this.userName || x.email == this.userName) && x.password == this.password && x.enable_Disable==false);
        this.result = temp[0];
        debugger;
        // let temp1:any =data.filter(x=>x.x.enable_Disable==true)
        // this.loader = true;
        if (this.result != undefined || this.result != null) {
          sessionStorage.setItem('UserName', this.result.name);
          sessionStorage.setItem('userid', this.result.id);
          sessionStorage.setItem('temp', '1');
          sessionStorage.setItem('role', 'Interview Panel');
          sessionStorage.setItem('roleid', '5');
          location.href = "#/ScheduledInterviews";
          location.reload();

        
        }
       
        // else if(temp1==true)
        // {
        //   Swal.fire('User is Disabled!!');
        //   this.userName = "";
        //   this.password = "";
        // }

        else {
          Swal.fire('Username or Password is Invalid or User is Disabled');
          this.userName = "";
          this.password = "";
        }

       
      })
    }
      
      else if (this.roleID == 2) {
        this.RecruitmentServiceService.GetClientStaff().subscribe(data => {
          let temp: any = data.filter(x => (x.phoneNo == this.userName || x.email == this.userName) && x.password == this.password && x.enable_Disable==false);
          this.result = temp[0];
          debugger;
          // this.loader = true;
          if (this.result != undefined || this.result != null) {
            sessionStorage.setItem('UserName', this.result.name);
            sessionStorage.setItem('userid', this.result.id);
            sessionStorage.setItem('temp', '1');
            sessionStorage.setItem('role', 'Hiring Manager');
            sessionStorage.setItem('roleid', '2');
            location.href = "#/Dashboard";
            location.reload();
          }
          else {
            Swal.fire('Username or Password is Invalid or User is Disabled');
            this.userName = "";
            this.password = "";
          }
  
        })
  
      }




    else if (this.roleID == 5) {

      this.RecruitmentServiceService.GetUsersdetailsForFinanceLogin(this.userName, this.password).subscribe(data => {
        this.result = data;
        if (this.result != undefined || this.result != null) {
          localStorage.setItem('managerID', this.result.id);
          localStorage.setItem('staffID', this.result.staffID);
          localStorage.setItem('buildingID', this.result.buildingID);
          localStorage.setItem('userRoleID', this.result.userRoleID);
          localStorage.setItem('userName', this.result.loginName);
          localStorage.setItem('name', this.result.name);
          localStorage.setItem('phoneNo', this.result.phoneNo);
          localStorage.setItem('userName', this.result.emailID);
          localStorage.setItem('password', this.result.password);
          localStorage.setItem('loginTypeId', this.result.loginTypeID);
          localStorage.setItem('temp', '1');
          localStorage.setItem('roleid', '5');
          this.router.navigate(["/Dashboard"]);
          // location.reload();
        }
        else {

          Swal.fire('Username or Password is Invalid');
          this.userName = "";
          this.password = "";
        }
      })
    }

    else if (this.roleID == 1) {
      debugger
      this.RecruitmentServiceService.GetAdmin(this.userName, this.password).subscribe(data => {
        debugger
        this.result = data;

        if (this.result != undefined || this.result != undefined) {
          localStorage.setItem('userID', this.result.id);
          localStorage.setItem('managerID', this.result.id);
          localStorage.setItem('staffID', this.result.staffID);
          localStorage.setItem('buildingID', this.result.buildingID);
          localStorage.setItem('userRoleID', this.result.userRoleID);
          localStorage.setItem('userName', this.result.loginName);
          localStorage.setItem('name', this.result.name);
          localStorage.setItem('phoneNo', this.result.phoneNo);
          localStorage.setItem('userName', this.result.emailID);
          localStorage.setItem('loginTypeID', this.result.loginTypeID);
          localStorage.setItem('password', this.result.password);

          localStorage.setItem('temp', '1');
          localStorage.setItem('roleid', '1');
          this.router.navigate(["/Dashboard"]);
          // location.reload();
        }
        else {

          Swal.fire('Username or Password is Invalid');
          this.userName = "";
          this.password = "";
        }
      })
    }
  }
}