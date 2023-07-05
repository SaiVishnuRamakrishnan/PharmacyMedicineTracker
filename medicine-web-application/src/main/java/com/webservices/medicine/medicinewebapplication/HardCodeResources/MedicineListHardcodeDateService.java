package com.webservices.medicine.medicinewebapplication.HardCodeResources;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import java.util.ArrayList;

import com.webservices.medicine.medicinewebapplication.medicineListPojo.Medicines;

@Service
public class MedicineListHardcodeDateService {
	
	private static List<Medicines> medicineList = new ArrayList();
	private static int idCounter = 0;
	
	static {
//		medicineList.add(new Medicines(++idCounter, "Vaccine1", "Corona Virus", new Date(), false));
//		medicineList.add(new Medicines(++idCounter, "Vaccine2", "Corona Virus", new Date(), true));
//		medicineList.add(new Medicines(++idCounter, "Vaccine3", "Corona Virus", new Date(), false));
//		medicineList.add(new Medicines(++idCounter, "Vaccine4", "Corona Virus", new Date(), true));
//		medicineList.add(new Medicines(++idCounter, "Vaccine5", "Corona Virus", new Date(), false));
//		medicineList.add(new Medicines(++idCounter, "Vaccine6", "Corona Virus", new Date(), false));
//		medicineList.add(new Medicines(++idCounter, "Vaccine7", "Corona Virus", new Date(), false));
//		medicineList.add(new Medicines(++idCounter, "Vaccine5", "Corona Virus", new Date(), false));
//		medicineList.add(new Medicines(++idCounter, "Vaccine6", "Corona Virus", new Date(), false));
//		medicineList.add(new Medicines(++idCounter, "Vaccine7", "Corona Virus", new Date(), false));
	}
	
	public List<Medicines> findAll(){
		return medicineList;
	}
	
	public Medicines saveByIdOrCreate(Medicines medicineToBeSaved) {
		if(medicineToBeSaved.getId() == -1) {
			medicineToBeSaved.setId(++idCounter);
			medicineList.add(medicineToBeSaved);
		} else {
			deleteById(medicineToBeSaved.getId());
			medicineList.add(medicineToBeSaved);
		}
		return medicineToBeSaved;
	}
	
	public Medicines deleteById(long id) {
		Medicines medicinesById = findById(id);
		
		if(medicinesById == null) return null;
		if(medicineList.remove(medicinesById)) {
			return medicinesById;
		}
		return null;
	}

	public Medicines findById(long id) {
		for(Medicines medicine: medicineList) {
			if(medicine.getId() == id) {
				return medicine;
			}
		}
		return null;
	}
}
