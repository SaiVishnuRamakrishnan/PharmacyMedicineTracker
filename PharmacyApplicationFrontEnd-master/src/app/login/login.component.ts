import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { AuthenticateUserService } from '../service/authenticate-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="";
  password="";
  errorMessage="Invalid Credentials";
  invalidLogin=false;

  //Depedency Injection
  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private authenticateUserService: AuthenticateUserService) { }

  ngOnInit() {
  }

  // Function to validate the login
  handleLogin() {
    //if(this.username==="admin" && this.password==="admin") { -> using service
      if(this.authenticationService.authenticate(this.username, this.password) ) {
      this.invalidLogin=false;
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
    } else if(this.authenticateUserService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcomeUserPageComponent', this.username])
    } else{
      this.invalidLogin=true;
    }
  }

}
