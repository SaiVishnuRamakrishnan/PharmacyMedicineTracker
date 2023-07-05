import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineListDataService } from '../service/data/medicine-list-data.service';
export class AvailableMedicineList {
  constructor(
    public id:number,
    public description:string,
    public approximateDeliveryDate:Date,
    public deliverable:boolean,
    public setTemp:number,
    public orderRequest:boolean
  ) {}
}
@Component({
  selector: 'app-list-medicine-available',
  templateUrl: './list-medicine-available.component.html',
  styleUrls: ['./list-medicine-available.component.css']
})
export class ListMedicineAvailableComponent implements OnInit {

  availableMedicineLists: AvailableMedicineList[]
  deletedStatusMessage: String

  // availableMedicineLists = [
  //   new AvailableMedicineList(1, 'Covid Vaccine1' , true, new Date()),
  //   new AvailableMedicineList(2, 'Covid Vaccine2' , true, new Date()),
  //   new AvailableMedicineList(3, 'Covid Vaccine3' , true, new Date()),
  //   new AvailableMedicineList(4, 'Covid Vaccine4' , false, new Date()),
  //   new AvailableMedicineList(5, 'Covid Vaccine5' , true, new Date()),
  // ]
  constructor(
    private medicineListService:MedicineListDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.refreshMedicineList();
  }

  deleteMedicineFromList(id, description) {
    this.medicineListService.deleteMedicineFromTheList('admin', id).subscribe(
      response => {
        this.deletedStatusMessage= `Delete of ${description} Successful`
        this.refreshMedicineList()
        console.log(response)
      }
    )
  }

  viewMedicineTempHistory(id) {
    this.router.navigate(['temperatureHistory', id])
    console.log(`sss ${id}`)
  }

  updateMedicineList(id) {
    this.router.navigate(['medicine', id])
    console.log(`sss ${id}`)
  }

  refreshMedicineList() {
    this.medicineListService.retriveAllMedicineList('admin').subscribe(
      response => {
        console.log(response)
        this.availableMedicineLists = response;
      }
    )
  }
  
  createNewMedicine() {
    this.router.navigate(['medicine',-1])
  }
}
