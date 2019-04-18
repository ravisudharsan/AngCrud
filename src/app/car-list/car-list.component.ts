import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClientService, Car } from '../service/http-client.service';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {

  cars:Car[];

  constructor(private router:Router,private httpClientService: HttpClientService) { }
  
  showAddCar(){
    this.router.navigate(['/addcar']);
  }

  ngOnInit() {
    this.httpClientService.getcar().subscribe(
      response =>{this.cars = response;}
     );
  }

  deleteCar(car: Car): void {
    this.httpClientService.deleteCar(car)
      .subscribe( data => {
        this.cars = this.cars.filter(u => u !== car);
      })
  };

  updateUser(car: Car){
    localStorage.setItem("carId",car.id);
    localStorage.setItem("carName",car.name);
    localStorage.setItem("carModel",car.model);
    alert("csrId");
    alert(car.id);
this.router.navigate(['/edit']);

  }
}
