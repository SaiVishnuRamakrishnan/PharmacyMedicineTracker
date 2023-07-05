import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { MedicineListDataService } from '../service/data/medicine-list-data.service';
import { AvailableMedicineList } from '../list-medicine-available/list-medicine-available.component';

@Component({
  selector: 'app-welcome-user-page',
  templateUrl: './welcome-user-page.component.html',
  styleUrls: ['./welcome-user-page.component.css']
})
export class WelcomeUserPageComponent implements OnInit {
  
  usernameFromLogin='';
  postiveResponseMessage: String="";
  negativeResponseMessage: String="";
  availableMedicineLists: AvailableMedicineList[];
  medicineById: AvailableMedicineList;
  medicineByIdR: AvailableMedicineList;
  deliverable=false;
  id: number

  constructor(private route:ActivatedRoute,
    private welcomeDataService:WelcomeDataService,
    private medicineListService: MedicineListDataService,
    private router: Router,
    private medicineDataService: MedicineListDataService,
    ) { }

  ngOnInit() {
    this.usernameFromLogin=this.route.snapshot.params['name'],
    this.refreshMedicineList();
  }

  refreshMedicineList() {
    this.medicineListService.retriveAllMedicineList(this.usernameFromLogin).subscribe(
      response => {
        console.log(response)
        this.availableMedicineLists = response;
      }
    )
  }
 
  orderMedicine(id) {
    this.id = id;
    this.postiveResponseMessage=""
    this.negativeResponseMessage=""
    if(id!=-1) {
      this.medicineDataService.retriveMedicineById(this.usernameFromLogin, id).subscribe(
        response => {
          this.handleResponse(response)
        }

      )
    }

  }

  handleResponse(response: any) {
    this.medicineByIdR = response;
    this.deliverable = this.medicineByIdR.deliverable;
    if(this.deliverable) {
      this.medicineDataService.updateMedicineOrderStatus(this.usernameFromLogin, this.id, this.medicineByIdR).subscribe()
      this.postiveResponseMessage="Medicine Ordered Successfully"
    }  else {
      this.negativeResponseMessage="Medicine Not Deliverable"
    }
  }

  viewMedicineTempHistory(id) {
    this.router.navigate(['temperatureHistory', id])
    console.log(`sss ${id}`)
  }
}
