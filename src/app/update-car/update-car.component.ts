import { Component, OnInit } from '@angular/core';
import {HttpClientService, Car} from '../service/http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})

export class UpdateCarComponent implements OnInit {

  car:Car=new Car("","","");

  constructor(private httpClientService:HttpClientService,private router:Router) { }

  ngOnInit() {
    this.car.id=localStorage.getItem("carId");
    this.car.name=localStorage.getItem("carName");
    this.car.model=localStorage.getItem("carModel");
    alert(this.car.id);
  }

  submitCar(){
    this.httpClientService.updateCar(this.car).subscribe(
      data => {console.log(data);},
      error => {alert(error);}
    );
    this.router.navigate(['/listcars']);
  }
}
