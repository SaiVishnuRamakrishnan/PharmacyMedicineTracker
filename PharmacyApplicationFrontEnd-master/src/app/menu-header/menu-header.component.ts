import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { AuthenticateUserService } from '../service/authenticate-user.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
    private authenticateUserService : AuthenticateUserService ) { }

  ngOnInit() {
  }

}
