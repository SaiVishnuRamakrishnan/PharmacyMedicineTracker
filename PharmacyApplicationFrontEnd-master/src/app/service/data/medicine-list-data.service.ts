import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvailableMedicineList } from '../../list-medicine-available/list-medicine-available.component'

export class Count {
  constructor(public message: String){}
}

@Injectable({
  providedIn: 'root'
})
export class MedicineListDataService {

  constructor(
    private http:HttpClient
  ) { }
  
  retriveAllMedicineListHardCode(usernameFromLogin) {
    return this.http.get<AvailableMedicineList[]>(`http://localhost:8080/medicines/${usernameFromLogin}/medicineList`);   
  }

  retriveMedicineByIdHardCode(usernameFromLogin, id) {
    return this.http.get<AvailableMedicineList>(`http://localhost:8080/medicines/${usernameFromLogin}/medicineListById/${id}`);   
  }

  deleteMedicineFromTheListHardCode(usernameFromLogin, id) {
    return this.http.delete(`http://localhost:8080/medicines/${usernameFromLogin}/deleteMedicineById/${id}`);
  }
  
  updateMedicineByIdHardCode(usernameFromLogin, id, medicine) {
    return this.http.put(`http://localhost:8080/medicines/${usernameFromLogin}/UpdatemedicineListById/${id}`, medicine);
  }
  
  createNewMedicineHardCode(usernameFromLogin, medicine) {
    return this.http.post(`http://localhost:8080/medicines/${usernameFromLogin}/createMedicineList/`, medicine);
  }



  retriveAllMedicineList(usernameFromLogin) {
    return this.http.get<AvailableMedicineList[]>(`http://localhost:8080/medicines/${usernameFromLogin}/findAllMedicines`);   
  }
 
  retriveMedicineById(usernameFromLogin, id) {
    return this.http.get<AvailableMedicineList>(`http://localhost:8080/medicines/${usernameFromLogin}/findById/${id}`);   
  }

  deleteMedicineFromTheList(usernameFromLogin, id) {
    return this.http.delete(`http://localhost:8080/medicines/${usernameFromLogin}/deleteById/${id}`);
  }

  updateMedicineById(usernameFromLogin, id, medicine) {
    return this.http.put(`http://localhost:8080/medicines/${usernameFromLogin}/saveMedicine/${id}`, medicine);
  }
  updateMedicineOrderStatus(usernameFromLogin, id, medicine) {
    return this.http.put(`http://localhost:8080/medicines/${usernameFromLogin}/orderRequest/${id}`, medicine);
  }
  createNewMedicine(usernameFromLogin, medicine) {
    return this.http.post(`http://localhost:8080/medicines/${usernameFromLogin}/createNewMedicine/`, medicine);
  }

  getCountOfMedicines() {
    return this.http.get<Count>(`http://localhost:8080/medicines/count`);
  }

}
