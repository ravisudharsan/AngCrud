import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Car{
  constructor(
    public id:string,
    public name:string,
    public model:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  getcar()
  {
    console.log("test call");
    return this.httpClient.get<Car[]>('http://localhost:8080/all');
  }

  public deleteCar(car) {
    return this.httpClient.delete<Car>("http://localhost:8080/delete" + "/"+ car.id);
  }
  
  public updateCar(car) {
    return this.httpClient.put<Car>("http://localhost:8080/update", car);
  }

  public addcar(car) {
    return this.httpClient.post<Car>("http://localhost:8080/insert", car);
  }

}
