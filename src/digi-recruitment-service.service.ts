import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DigiRecruitmentServiceService {
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
  
  public GetVendor_Dasboard() {
    debugger
    return this.http.get<any[]>(this.host + "/Master/GetVendor_Dasboard");
  }




}
