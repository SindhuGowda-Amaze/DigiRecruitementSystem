import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RecruitmentServiceService {

  host = "https://23.101.22.93/DigiOfficeBSINTAPI";
  //DigiOfficeBSINTAPI
//  private host = "http://localhost:1807/";
  //private host = localStorage.getItem('apiurl');
  private url: string = "";
  showvid: any;
  URL: any;
  constructor(private http: HttpClient) { }

  public GetLoginTypeMaster() {

    return this.http.get<any[]>(this.host + "/Vendor/GetLoginTypeMaster");
  }


  public GetUsersdetailsForHRLogin(Name:any, Password:any) {

    return this.http.get<any[]>(this.host + "/User/GetUsersdetailsForHRLogin?Name=" + Name + "&Password=" + Password);
  }
 
  public GetUsersdetailsMob(Name:any, Password:any) {

    return this.http.get<any[]>(this.host + "/User/GetUsersdetailsMob?Name=" + Name + "&Password=" + Password);
  }

  public GetUsersdetailsForManagerLogin(Name:any, Password:any) {

    return this.http.get<any[]>(this.host + "/User/GetUsersdetailsForManagerLogin?Name=" + Name + "&Password=" + Password);
  }

  public GetUsersdetailsForFinanceLogin(Name:any, Password:any) {

    return this.http.get<any[]>(this.host + "/User/GetUsersdetailsForFinanceLogin?Name=" + Name + "&Password=" + Password);
  }

  public GetAdmin(Name:any, Password:any) {

    return this.http.get<any[]>(this.host + "/User/GetAdmin?Name=" + Name + "&Password=" + Password);
  }

  public GetJob_Requirements() {
    return this.http.get<any[]>(this.host + "/Vendor/GetJob_Requirements");
  }

  public GetCandidateRegistration() {
    return this.http.get<any[]>(this.host + "/Vendor/GetCandidateRegistration");
  }

 
  public UpdateCandidateRegistrationAcceptReject(id:any, typeid:any, shortlist:any) {
    return this.http.get<any[]>(this.host + "/Vendor/UpdateCandidateRegistrationAcceptReject?ID=" + id + '&TypeID=' + typeid + '&ShortlistionNotes=' + shortlist);
  }

  public GetStaffs() {
    return this.http.get<any[]>(this.host + "/Vendor/GetStaffs");
  }
  
  public UpdateCandidateInterviewSchedule(data: { ID: any; StaffID: any; Date: any; TimeID: any; Notes: any; }) {
    this.url = this.host + "/Vendor/UpdateCandidateInterviewSchedule";
    return this.http.post(this.url, data);
  }
  public GetSlotsMasterByStaffID(startdate:any, staffid:any) {
    return this.http.get<any[]>(this.host + "/Vendor/GetSlotsMasterByStaffID?Date=" + startdate + '&StaffID=' + staffid);
  }


}
