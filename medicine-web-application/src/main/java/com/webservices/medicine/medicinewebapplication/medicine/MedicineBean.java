package com.webservices.medicine.medicinewebapplication.medicine;

public class MedicineBean {

	private String message;

	public MedicineBean(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "MedicineBean [message=" + message + "]";
	}

}
