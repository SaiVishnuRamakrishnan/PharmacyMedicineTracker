package com.webservices.medicine.medicinewebapplication.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.webservices.medicine.medicinewebapplication.medicine.MedicineBean;

@CrossOrigin("http://localhost:4200")
@RestController
public class MedicineController {

    @GetMapping(path = "/welcome")
    public String welcome() {
        return "Welcome";
    }
    
    @GetMapping(path = "/welcome-bean")
    public MedicineBean welcomeBean() {
        return new MedicineBean("Welcome");
    }
    
    @GetMapping(path = "/welcome-bean/path-variable/{name}")
    public MedicineBean welcomeBeanPathVariable(@PathVariable String name) {
        return new MedicineBean(String.format("Welcome, %s", name));
    }
    
    @GetMapping(path = "/welcome-error")
    public MedicineBean errorOccured() {
    	throw new RuntimeException("Some error has occured");
    }
}
