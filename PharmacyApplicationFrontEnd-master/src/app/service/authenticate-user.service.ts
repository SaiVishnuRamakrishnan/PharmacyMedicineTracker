import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateUserService {


  constructor() { }

  authenticate(username, password) {
    if(username=="user" && password=="user") {
      sessionStorage.setItem('authenticatedUser', username)
      return true;
    } else {
      return false;
    }
  }
  
  isUserSessionLive() {
    let sessionData = sessionStorage.getItem('authenticatedUser')
    return !(sessionData == null)
  }

  sessionUserExpired() {
    sessionStorage.removeItem('authenticatedUser')
  }
}
