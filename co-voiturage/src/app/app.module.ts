import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarService } from './car.service';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarUpdateComponent } from './car-update/car-update.component';
import { CarDeleteComponent } from './car-delete/car-delete.component';
import { CarMenuComponent } from './car-menu/car-menu.component';




@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarDetailComponent,
    CarCreateComponent,
    CarUpdateComponent,
    CarDeleteComponent,
    CarMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
