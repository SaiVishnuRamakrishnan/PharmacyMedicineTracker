import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { AuthenticateUserService } from '../service/authenticate-user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticatedService: AuthenticationService,
     private authenticateUserService : AuthenticateUserService,) { }

  ngOnInit() {
    this.authenticatedService.sessionAdminExpired();
    this.authenticateUserService.sessionUserExpired();
  }
}
