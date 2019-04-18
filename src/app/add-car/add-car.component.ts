import { Component, OnInit } from '@angular/core';
import {HttpClientService, Car} from '../service/http-client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  user: Car = new Car("","","");

  constructor(private httpClientService: HttpClientService, private router:Router) { }

  ngOnInit() {
  }

  addCar(): void {
    this.httpClientService.addcar(this.user)
        .subscribe( data => {
          alert("Car Added successfully.");
    });
    this.router.navigate(['/listcars']);
  }
}
