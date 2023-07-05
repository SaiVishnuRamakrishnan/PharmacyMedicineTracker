package com.webservices.medicine.medicinewebapplication.repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.webservices.medicine.medicinewebapplication.medicineListPojo.Medicines;

public interface MedicineRepo extends MongoRepository<Medicines, Integer>{

}
