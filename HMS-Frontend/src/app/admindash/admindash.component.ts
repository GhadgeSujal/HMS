import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
// import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';
import { AuthService } from '../login.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css'],
})
export class AdmindashComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService,private authService:AuthService, private router:Router) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatientList().subscribe({
      next: (data) => {
        this.patients = data;
        console.log(this.patients);
      },
      error: (error) => {
        console.error('Error fetching patients', error);
      },
    });
  }

  deletePatient(id: number): void {
    this.patientService.deletePatient(id).subscribe((data) => {
      console.log(data);
      this.getPatients();
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
