import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  erroeMessage="An Error occured please contact the support team";

  constructor() { }

  ngOnInit() {
  }

}
