import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DoacdashComponent } from './doacdash/doacdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doc-login/doc-login.component';
import { AdLoginComponent } from './ad-login/ad-login.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    AppointmentComponent,
    CreateAppointmentComponent,
    HomeComponent,
    DoacdashComponent,
    CreatePatientComponent,
    MedicinelistComponent,
    CreateMedicineComponent,
    UpdatePatientComponent,
    ViewPatientComponent,
    ViewMedicineComponent,
    UpdateMedicineComponent,
    DocloginComponent,
    AdLoginComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
