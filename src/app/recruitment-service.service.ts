import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RecruitmentServiceService {
 

 host = "https://23.101.22.93/DigiOfficeBSINTAPI";
  //DigiOfficeBSINTAPI
 // private host = "http://localhost:1807/";
  // private host = localStorage.getItem('apiurl');
  private url: string = "";
  showvid: any;
  URL: any;
  data:any;
  constructor(private http: HttpClient) { }

  public GetLoginTypeMaster() {

    return this.http.get<any[]>(this.host + "/Vendor/GetLoginTypeMaster");
  }

  public GetClientMaster() {

    return this.http.get<any[]>(this.host + "/Master/GetClientMaster");
  }

  public GetClientStaff() {

    return this.http.get<any[]>(this.host + "/Master/GetClientStaff");
  }


  public InsertClientMaster(data:any) {
    this.url = this.host + "/Master/InsertClientMaster";
    return this.http.post(this.url, data);
  }

  public InsertClientStaff(data:any) {
    this.url = this.host + "/Master/InsertClientStaff";
    return this.http.post(this.url, data);
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
  public GetUserslist() {
    return this.http.get<any[]>(this.host + "/User/GetUserslist");
  }
 
    public RejectInterview(id:any, typeid:any, rinterview:any) {
    return this.http.get<any[]>(this.host + "/Vendor/RejectInterview?ID=" + id + '&TypeID=' + typeid + '&Interviewercomments=' + rinterview);
  }
  
  public UploadImages(files:any) {
    let formdata: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append('file_upload', files[i], files[i].name);
    }
    return this.http.post<any>(this.host + "/Building/UploadImages/", formdata);
  }
  public UpdateOfferLetter(data:any) {
    this.url = this.host + "/Vendor/UpdateOfferLetter";
    return this.http.post(this.url, data);
  }
  public UpdateCandidateJoiningDate(data:any) {
    this.url = this.host + "/Vendor/UpdateCandidateJoiningDate";
    return this.http.post(this.url, data);
  }


 


  public sendemail(data:any) {
    this.url = this.host + "/Vendor/sendemail";
    return this.http.post(this.url, data);
  }
  public AcceptRejectOffer(id:any, typeid:any, offercomments:any) {
    return this.http.get<any[]>(this.host + "/Vendor/AcceptRejectOffer?ID=" + id + '&TypeID=' + typeid + '&OfferComments=' + offercomments);
  }

  public UsersHr() {

    return this.http.get<any[]>(this.host + "/Vendor/UsersHr");
  }
  public InsertJob_Requirements(data:any) {
    this.url = this.host + "/Vendor/InsertJob_Requirements";
    return this.http.post(this.url, data);
  }

  public UpdateVendor(data:any) {
    debugger
    this.url = this.host + "/User/UpdateVendorforjob";
    return this.http.post(this.url, data);
  }

  public GetUserslist1() {
    return this.http.get<any[]>(this.host + "/User/GetUserslist");
  }

  public InsertCandidateRegistration(data:any) {
    this.url = this.host + "/Vendor/InsertCandidateRegistration";
    return this.http.post(this.url, data);
  }

  public AttachmentsUpload(files: any) {
    debugger
    let formdata: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append('file_upload', files[i], files[i].name);
    }
    debugger
    let APIURL = this.host + "/Master/UploadImages/";
    return this.http.post(APIURL, formdata);

  }

  public InsertRecruiterMaster(data:any) {
    this.url = this.host + "/User/InsertRecruiterMaster";
    return this.http.post(this.url, data);
  }

  public GetRecruiterMaster() {

    return this.http.get<any[]>(this.host + "/User/GetRecruiterMaster");
  }

  public InsertRecruiterStaff(data:any) {
    this.url = this.host + "/User/InsertRecruiterStaff";
    return this.http.post(this.url, data);
  }

  public GetRecruiterStaff() {

    return this.http.get<any[]>(this.host + "/User/GetRecruiterStaff");
  }

  public GetSourcingMaster() {

    return this.http.get<any[]>(this.host + "/Master/GetSourcingMaster");
  }
  
  public GetVendor_Dasboard() {
    debugger
    return this.http.get<any[]>(this.host + "/Master/GetVendor_Dasboard");
  }
  public GetVendor_Staff() {
    debugger
    return this.http.get<any[]>(this.host + "/Master/GetVendor_Staff");
  }
  public InsertVendor_Staff(data:any) {
    this.url = this.host + "/Master/InsertVendor_Staff";
    return this.http.post(this.url, data);
  }

  
  public DeleteVendor_Staff(ID : any) {
    debugger 
    return this.http.get<any[]>(this.host+ "/Master/DeleteVendor_Staff?ID=" +ID);
  }

  public InsertVendor_Dasboard(data:any) {
    this.url = this.host + "/Master/InsertVendor_Dasboard";
    return this.http.post(this.url, data);
  }

  public UpdateVendor_Dasboard(data:any) {
    debugger
    this.url = this.host + "/Master/UpdateVendor_Dasboard";
    return this.http.post(this.url, data);
  }

  
  public UpdateVendor_Staff(data:any) {
    debugger
    this.url = this.host + "/Master/UpdateVendor_Staff";
    return this.http.post(this.url, data);
  }

  public DeleteVendor_Dasboard(ID : any) {
    debugger 
    return this.http.get<any[]>(this.host+ "/Master/DeleteVendor_Dasboard?ID=" +ID);
  }


  public GetSourcigStaff() {
    debugger
    return this.http.get<any[]>(this.host + "/Master/GetSourcigStaff");
  }
  
  public InsertSourcigStaff(data:any) {
    this.url = this.host + "/Master/InsertSourcigStaff";
    return this.http.post(this.url, data);
  }

  public InsertSourcigMaster(data:any) {
    this.url = this.host + "/Master/InsertSourcingMaster";
    return this.http.post(this.url, data);
  }

 
 


  public DeleteRecruiterStaff(id : any) {
    debugger
    let APIURL = this.host + "/User/DeleteRecruiterStaff?ID="+id;
    return this.http.get<any[]>(APIURL);
  }

  public DeleteSourcigStaff(id : any) {
    debugger
    let APIURL = this.host + "/Master/DeleteSourcigStaff?ID="+id;
    return this.http.get<any[]>(APIURL);
  }

  public DeleteRecruiterMaster(id : any) {
    debugger
    let APIURL = this.host + "/User/DeleteRecruiterMaster?ID="+id;
    return this.http.get<any[]>(APIURL);
  }

  public DeleteSourcingMaster(id : any) {
    debugger
    let APIURL = this.host + "/Master/DeleteSourcingMaster?ID="+id;
    return this.http.get<any[]>(APIURL);
  }
  

  public UpdateRecruiterStaff(data:any) {
    debugger
    this.url = this.host + "/User/UpdateRecruiterStaff";
    return this.http.post(this.url, data);
  }

  public UpdateRecruiterMaster(data:any) {
    debugger
    this.url = this.host + "/User/UpdateRecruiterMaster";
    return this.http.post(this.url, data);
  }

  public UpdateSourcingMaster(data:any) {
    debugger
    this.url = this.host + "/Master/UpdateSourcingMaster";
    return this.http.post(this.url, data);
  }

  public UpdateSourcingStaff(data:any) {
    debugger
    this.url = this.host + "/Master/UpdateSourcingStaff";
    return this.http.post(this.url, data);
  }
  public DeleteClientMaster(ID:any) {
    debugger
    return this.http.get<any[]>(this.host + "/Master/DeleteClientMaster?ID="+ID)
  }

  public DeleteClientStaff(ID:any) {
    debugger
    return this.http.get<any[]>(this.host + "/Master/DeleteClientStaff?ID="+ID)
  }

  public UpdateClientMaster(data:any) {
    debugger
    this.url = this.host + "/Master/UpdateClientMaster";
    return this.http.post(this.url, data);
  }

  public UpdateClientStaff(data:any) {
    debugger
    this.url = this.host + "/Master/UpdateClientStaff";
    return this.http.post(this.url, data);
  }
  
  public GetRoleType() {
    debugger
    return this.http.get<any[]>(this.host + "/MasterDemo/GetRoleType?UserTypeID=1");
  }

  
  public AssignRecruiter(data:any) {
    debugger
    this.url = this.host + "/Master/AssignRecruiter";
    return this.http.post(this.url, data);
  }

  
}
