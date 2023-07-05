import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { MedicineListDataService } from '../service/data/medicine-list-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  usernameFromLogin='';
  responseMessage: String="";

  //Activated route to pick parameter from link
  constructor(private route:ActivatedRoute,
    private welcomeDataService:WelcomeDataService,
    private medicineListDataService: MedicineListDataService,
    private router: Router) { }

  ngOnInit() {
    this.usernameFromLogin=this.route.snapshot.params['name'],
    this.getCount()
  }

  open() {
    this.router.navigate(['listMedicineAvailable'])
  }

  getCount() {
    this.medicineListDataService.getCountOfMedicines().subscribe(    
    response => this.handleSuccessfulResponse(response),
    error=>this.handleErrorResponse(error));
  }
  getWelcomeMessage() {
   // console.log(this.welcomeDataService.executeWelcomeBeanService());
    this.welcomeDataService.executeWelcomeBeanService().subscribe(
       response => this.handleSuccessfulResponse(response),
       error=>this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParam() {
    this.welcomeDataService.executeWelcomeBeanServiceWithPathVariable(this.usernameFromLogin).subscribe(
      response => this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: any){
    console.log(this.responseMessage);
    this.responseMessage = response.message;
  }

  handleErrorResponse(error) {
    this.responseMessage = error.error.message;
  }

}
