package com.webservices.medicine.medicinewebapplication.resources;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.webservices.medicine.medicinewebapplication.medicine.MedicineBean;
import com.webservices.medicine.medicinewebapplication.medicineListPojo.Medicines;
import com.webservices.medicine.medicinewebapplication.repository.MedicineRepo;

@CrossOrigin("http://localhost:4200")
@RestController
public class MedicineDbService {
	
	private static int idCounter = 0;

	@Autowired
	private MedicineRepo medicineRepo;
	
	@GetMapping("/medicines/{username}/findAllMedicines")
	public List<Medicines> getMedicines() {
		return medicineRepo.findAll();
	}
	
	@DeleteMapping("/medicines/{username}/deleteById/{id}")
	public ResponseEntity<Void> deleteMedicine(@PathVariable String username, @PathVariable int id) {
		//Optional<Medicines> medicineToBeDeleted = medicineRepo.findById(id);
	
		//if(medicineToBeDeleted == null) {
		//	return ResponseEntity.noContent().build();
		//} else {
			medicineRepo.deleteById(id);
			return ResponseEntity.noContent().build();
		//}
	}
	
	@GetMapping("/medicines/{username}/findById/{id}")
	public Optional<Medicines> getMedicineById(@PathVariable int id) {
		return medicineRepo.findById(id);
	}
	
	@GetMapping(path = "/medicines/count")
	public MedicineBean getTotalCountOfMedicines() {
		return new MedicineBean(String.valueOf(medicineRepo.count()));
	}
	
	
	@PutMapping("/medicines/{username}/saveMedicine/{id}")
	public ResponseEntity<Medicines> updateOldMedicineById(@PathVariable String username, @PathVariable int id, @RequestBody Medicines medicineToBeSaved) {
		Medicines savedMedicine = createOrUpdateMedicine(medicineToBeSaved);
		return new ResponseEntity<Medicines>(savedMedicine, HttpStatus.OK);
	}
	
	@PutMapping("/medicines/{username}/orderRequest/{id}")
	public ResponseEntity<Medicines> updateOrderRequestMedicineById(@PathVariable String username, @PathVariable int id, @RequestBody Medicines medicineToBeUpdated) {
		//Medicines savedMedicine = createOrUpdateMedicine(medicineToBeUpdated);
			medicineRepo.deleteById(medicineToBeUpdated.getId());
			medicineToBeUpdated.setOrderRequest(true);
			medicineRepo.save(medicineToBeUpdated);			
		return new ResponseEntity<Medicines>(medicineToBeUpdated, HttpStatus.OK);
	}
	
	@PostMapping(path = "/medicines/{username}/createNewMedicine")
	public ResponseEntity<Void> createMedicineById(@PathVariable String username, @RequestBody Medicines medicineToBeCreated) {
		Medicines createdMedicine = createOrUpdateMedicine(medicineToBeCreated);	
		//Created new medicine list and taking the current request path and appending the ID.
		
		//Location
		//Get Current resourse URL
		//{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdMedicine.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	public Medicines createOrUpdateMedicine(Medicines medicineToBeCreatedOrSaved) {
		if(medicineToBeCreatedOrSaved.getId()==-1 || medicineToBeCreatedOrSaved.getId()==0) {
			medicineToBeCreatedOrSaved.setId(++idCounter);
			if(medicineToBeCreatedOrSaved.getTempValues()== null) {
				medicineToBeCreatedOrSaved.setTempValues(null);
			}		
			medicineRepo.save(medicineToBeCreatedOrSaved);
		} else {
			if(medicineToBeCreatedOrSaved.getSetTemp()!=0) {
				medicineToBeCreatedOrSaved = createNewTempRecord(medicineToBeCreatedOrSaved);
			}
				medicineRepo.deleteById(medicineToBeCreatedOrSaved.getId());
			medicineRepo.save(medicineToBeCreatedOrSaved);
		}
		return medicineToBeCreatedOrSaved;
	}

	private Medicines createNewTempRecord(Medicines medicineToBeCreatedOrSaved) {
		int lengtha = medicineToBeCreatedOrSaved.getTempValues().length;
		int oLocalTempValues[][] = medicineToBeCreatedOrSaved.getTempValues();
		int localTempValues[][] = new int[lengtha + 1][2];
		  for (int i = 0; i < lengtha; i++) {
			  localTempValues[i][0] = oLocalTempValues[i][0];
			  localTempValues[i][1] = oLocalTempValues[i][1];
		    }
		localTempValues[localTempValues.length-1][0]=oLocalTempValues[oLocalTempValues.length-1][0]+1;
		localTempValues[localTempValues.length-1][1]=medicineToBeCreatedOrSaved.getSetTemp();
		medicineToBeCreatedOrSaved.setTempValues(localTempValues);
		return medicineToBeCreatedOrSaved;
	}
	
}
