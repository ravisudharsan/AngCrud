import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import {AppComponent} from './app.component';
import { UpdateCarComponent } from './update-car/update-car.component';

const routes: Routes = [
  { path: 'listcars', component: CarListComponent },
  { path: '', component: AppComponent},
  { path:'addcar',component:AddCarComponent},
  { path:'edit',component:UpdateCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
