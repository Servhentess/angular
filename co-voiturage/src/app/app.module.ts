import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarService } from './car.service';
import { CarCreateComponent } from './car-create/car-create.component';
import { AppRoutingModule } from './/app-routing.module';
import { CarUpdateComponent } from './car-update/car-update.component';
import { CarDeleteComponent } from './car-delete/car-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarDetailComponent,
    CarCreateComponent,
    CarUpdateComponent,
    CarDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
