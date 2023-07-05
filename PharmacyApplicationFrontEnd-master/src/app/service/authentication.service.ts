import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if(username==="admin" && password==="admin") {
      sessionStorage.setItem('authenticatedAdmin', username)
      return true;
    } else {
      return false;
    }
  }

  isAdminSessionLive() {
    let sessionData = sessionStorage.getItem('authenticatedAdmin')
    return !(sessionData == null)
  }

  sessionAdminExpired() {
    sessionStorage.removeItem('authenticatedAdmin')
  }
}
