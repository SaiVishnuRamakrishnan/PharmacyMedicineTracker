import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvailableMedicineList } from '../list-medicine-available/list-medicine-available.component';
import { MedicineListDataService } from '../service/data/medicine-list-data.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  id: number
  medicineById: AvailableMedicineList

  constructor(
    private medicineDataService: MedicineListDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.medicineById = new AvailableMedicineList(this.id, '', new Date(), false,null,false)

    if(this.id!=-1) {
      this.medicineDataService.retriveMedicineById('admin', this.id).subscribe(
        data=> this.medicineById = data
      )
    }
  }

  saveMedicine() {
    if (this.id===-1) {
      //Create new medicine
      this.medicineDataService.createNewMedicine('admin',this.medicineById).subscribe(
        data=> {
          console.log(data)
          this.router.navigate(['listMedicineAvailable'])
        }
      )
    } else {
      this.medicineDataService.updateMedicineById('admin', this.id, this.medicineById).subscribe(
        data => {
          console.log(data)
        this.router.navigate(['listMedicineAvailable'])
      }
      )
    }
  }

}
