package com.webservices.medicine.medicinewebapplication.HardCodeResources;

import java.net.URI;
import java.util.List;

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

import com.webservices.medicine.medicinewebapplication.medicineListPojo.Medicines;

@CrossOrigin("http://localhost:4200")
@RestController
public class MedicineListResource {
	
	@Autowired
	private MedicineListHardcodeDateService medicineListService;
	
	@GetMapping(path = "/medicines/{username}/medicineList")
	public List<Medicines> getAllMedicines(@PathVariable String username) {
		return medicineListService.findAll();
	}
	
	@DeleteMapping(path = "/medicines/{username}/deleteMedicineById/{id}")
	public ResponseEntity<Void> deleteMedicineById(@PathVariable String username, @PathVariable long id) {
		
		Medicines deletedMedicine = medicineListService.deleteById(id);
		if(deletedMedicine!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
	@GetMapping(path = "/medicines/{username}/medicineListById/{id}")
	public Medicines getMedicineById(@PathVariable String username, @PathVariable long id) {
		return medicineListService.findById(id);
	}
	
	@PutMapping(path = "/medicines/{username}/UpdatemedicineListById/{id}")
	public ResponseEntity<Medicines> updateMedicineById(@PathVariable String username, @PathVariable long id, @RequestBody Medicines medicineToBeUpdated) {
		Medicines savedMedicine = medicineListService.saveByIdOrCreate(medicineToBeUpdated);
		return new ResponseEntity<Medicines>(savedMedicine, HttpStatus.OK);
	}
	
	@PostMapping(path = "/medicines/{username}/createMedicineList")
	public ResponseEntity<Void> createMedicineById(@PathVariable String username, @RequestBody Medicines medicineToBeCreated) {
		Medicines createdMedicine = medicineListService.saveByIdOrCreate(medicineToBeCreated);
		
		//Created new medicine list and taking the current request path and appending the ID.
		
		//Location
		//Get Current resourse URL
		//{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdMedicine.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
}
