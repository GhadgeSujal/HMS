import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DoacdashComponent } from './doacdash/doacdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { DocloginComponent } from './doc-login/doc-login.component';
import { AdLoginComponent } from './ad-login/ad-login.component';
import { AdminauthguardService } from './adminauthguard.service';
// import { DoctorauthguardService } from './doctorauthguard.service';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './adminguard.service';
import { DoctorGuard } from './doctorguard.service';

const routes: Routes = [
  {
    path: 'admin',
    component: AdmindashComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'appointmentlist',
    component: AppointmentComponent,
    canActivate: [AdminGuard],
  },

  {
    path: 'create-appointment',
    component: CreateAppointmentComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'docdash',
    component: DoacdashComponent,
    canActivate: [DoctorGuard],
  },
  {
    path: 'create-patient',
    component: CreatePatientComponent,
    canActivate: [DoctorGuard],
  },
  {
    path: 'medicinelist',
    component: MedicinelistComponent,
    canActivate: [DoctorGuard],
  },
  {
    path: 'create-medicine',
    component: CreateMedicineComponent,
    canActivate: [DoctorGuard],
  },
  {
    path: 'update-patient/:id',
    component: UpdatePatientComponent,
    canActivate: [DoctorGuard],
  },
  {
    path: 'view-patient/:id',
    component: ViewPatientComponent,
    canActivate: [DoctorGuard],
  },
  {
    path: 'update-medicine/:id',
    component: UpdateMedicineComponent,
    canActivate: [DoctorGuard],
  },
  {
    path: 'view-medicine',
    component: ViewMedicineComponent,
    canActivate: [DoctorGuard],
  },
  {
    path: 'doc-login',
    component: DocloginComponent,
  },
  {
    path: 'ad-login',
    component: AdLoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
