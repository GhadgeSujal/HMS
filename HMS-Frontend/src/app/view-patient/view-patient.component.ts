import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { AuthService } from '../login.service';
// import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {

  id!: number;
  patient?: Patient;
  loading = true;
  errorMessage = '';

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router,
    private authService:AuthService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getPatient();
  }

  getPatient(): void {
    this.patientService.getPatientById(this.id).subscribe({
      next: (data) => {
        this.patient = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Unable to load patient details.';
      }
    });
  }
  logout(){
    this.authService.logout();
this.router.navigate(['home']);
  }
}
