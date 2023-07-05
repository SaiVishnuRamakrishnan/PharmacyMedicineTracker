import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { AvailableMedicineList } from '../list-medicine-available/list-medicine-available.component';
import { MedicineListDataService } from '../service/data/medicine-list-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateUserService } from '../service/authenticate-user.service';


@Component({
  selector: 'app-temparature-tracking-chart',
  templateUrl: './temparature-tracking-chart.component.html',
  styleUrls: ['./temparature-tracking-chart.component.css']
})
export class TemparatureTrackingChartComponent implements OnInit {
  id: number
  medicineName: ''
  medicineById: AvailableMedicineList;
  public chart: any;
  tempTime : number[] = [];
  tempCurrentTemp: number[] = [];
  tempData : number[][] = [];
  tempoVar : number = 0;
  dataAvailable=false;
  errorMessage="No Temeprature Data is available for - "
  currentTemp:number
  setTemp: number
  userView:boolean
  postiveResponseMessage=""
  constructor(
    private medicineDataService: MedicineListDataService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticateUserService : AuthenticateUserService ) { }

  ngOnInit() {
    this.refreshMedicineList();
  }

  refreshMedicineList(){

    this.id = this.route.snapshot.params['id'];
    this.medicineById = new AvailableMedicineList(this.id, '', new Date(), false,null,false)

    if(this.id!=-1) {
      this.medicineDataService.retriveMedicineById('admin', this.id).subscribe(
        data=> this.medicineById = data
      )
    }
    this.getTemperatureData();
    this.userView=this.authenticateUserService.isUserSessionLive();
  }

  setTempF() {
    this.postiveResponseMessage=""
          this.medicineDataService.updateMedicineById('admin', this.id, this.medicineById).subscribe(
            response => {
              this.handleResponseSet(response)
            }
      )
  }

  getTemperatureData() {
    if(this.id!=-1) {
      this.medicineDataService.retriveMedicineById('admin', this.id).subscribe(
        response => {
          this.handleResponse(response)
        }
      )
    }
  }

  handleResponseSet(response: any) {
    if(response.setTemp!=null) {
      this.postiveResponseMessage="Temperature is Set Successfully!"
    }
    this.tempCurrentTemp=[]
    this.tempTime=[]
    this.refreshMedicineList();
  }

  handleResponse(response: any) {
    this.tempData=response.tempValues;
    this.medicineName = response.medicineName;
console.log(this.tempData)
    if(this.tempData==null) {
      this.dataAvailable=true;
    } else {
      this.dataAvailable=false;
      for(let i=0; i<this.tempData.length; i++){    
        this.tempoVar = this.tempData[i][0];
        this.tempTime.push(this.tempoVar);
        this.tempoVar = this.tempData[i][1];
        this.tempCurrentTemp.push(this.tempoVar)   
        this.currentTemp=this.tempCurrentTemp[i]; 
    }
    this.createChart();
    }

  }

  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.tempTime, 
	       datasets: [
          {
            label: 'Temperature Data Set For - '+ this.medicineName,
            showLine: true,
            data: this.tempCurrentTemp,
            fill: false,
            borderColor: 'rgb(202, 233, 245)',
            lineTension: 0.1,
            pointBackgroundColor: [],
            pointBorderColor: [],
            
          }
        ]
      }, options: {
        tooltips: {


          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: false
        },

      }
    });
  for(let i=0; i<this.tempCurrentTemp.length; i++){
    if(this.tempCurrentTemp[i]>15 || this.tempCurrentTemp[i]<8) {
      this.chart.data.datasets[0].pointBackgroundColor[i] = "#cc00cc";
      this.chart.data.datasets[0].pointBorderColor[i] = "#cc0000"; 
    } else {
      this.chart.data.datasets[0].pointBackgroundColor[i] = "#00FF00";
      this.chart.data.datasets[0].pointBorderColor[i] = "#00FF00"; 
    }
}
  this.chart.update();
  }

  getBack() {
    if(this.userView){
      this.router.navigate(['welcomeUserPageComponent',"user"])
    } else {
      this.router.navigate(['listMedicineAvailable'])
    } 
  }
}
