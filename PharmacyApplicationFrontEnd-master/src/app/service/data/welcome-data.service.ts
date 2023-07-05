import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class WelcomeBean {
  constructor(public message: String){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeWelcomeBeanService() {
    return this.http.get<WelcomeBean>('http://localhost:8080/welcome-bean');   
  }

  executeWelcomeBeanServiceWithPathVariable(name) {
    // let basicAuthHeader = this.createBasicHttpAuthenticationHeader();
    // //Creating header
    // let headers = new HttpHeaders(
    //   {
    //     Authorization: basicAuthHeader
    //   }
    // )

    return this.http.get<WelcomeBean>(`http://localhost:8080/welcome-bean/path-variable/${name}`);
    //{headers});   
  }

  // createBasicHttpAuthenticationHeader() {
  //   let username = 'user'
  //   let password = 'user'
  //   let basicAuthenticationHeader = 'Basic' + window.btoa(username + ':' + password);
  //   return basicAuthenticationHeader;
  // }
}
