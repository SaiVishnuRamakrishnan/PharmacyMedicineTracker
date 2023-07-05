import { Component, OnInit } from '@angular/core';
import { AvailableMedicineList } from '../list-medicine-available/list-medicine-available.component';
import { MedicineListDataService } from '../service/data/medicine-list-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-request-page',
  templateUrl: './medicine-request-page.component.html',
  styleUrls: ['./medicine-request-page.component.css']
})
export class MedicineRequestPageComponent implements OnInit {
  
  availableMedicineLists: AvailableMedicineList[]=[]
  deletedStatusMessage: String
  availableMedicineListsTemp: AvailableMedicineList[];
  medicineById: AvailableMedicineList
  id: number

  constructor(
    private medicineListService:MedicineListDataService,
    private router:Router,
    private medicineDataService: MedicineListDataService,
  ) { }

  ngOnInit() {
    this.refreshMedicineList();
    this.medicineById = new AvailableMedicineList(this.id, '', new Date(), false,null,false)
  }

  refreshMedicineList() {
    this.availableMedicineLists=[]
    this.medicineListService.retriveAllMedicineList('admin').subscribe(
      response => {
        this.handleResponse(this.availableMedicineListsTemp = response);
      }
    )
  }

  handleResponse(response: any) {
    for(let i=0; i<this.availableMedicineListsTemp.length; i++){ 
        if(this.availableMedicineListsTemp[i].orderRequest) {
          this.availableMedicineLists.push(this.availableMedicineListsTemp[i]);
        }
    }
  }
  
  resetOrderStatus(id) {
    this.id=id;
    if(this.id!=-1) {
      this.medicineDataService.retriveMedicineById('admin', this.id).subscribe(
        response => {
          this.resetOrderStatusById(this.medicineById = response);
        }
      )
    }
  }
  resetOrderStatusById(response:any) {
    this.medicineById.orderRequest=false;
    this.medicineDataService.updateMedicineById('admin', this.id, this.medicineById).subscribe(
      data => {
        console.log(data)
        this.refreshMedicineList();
    }
    )
  }
  getBack() {
      this.router.navigate(['welcome',"admin"])
  }
}
