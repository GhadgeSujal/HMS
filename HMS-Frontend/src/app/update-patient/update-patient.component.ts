import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
// import { DocauthService } from '../docauth.service';
import { AuthService } from '../login.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  patient: Patient = new Patient();

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private authService:AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.patientService.getPatientById(id).subscribe({
      next: (data) => {
        this.patient = data;
      },
      error: (error) => {
        console.error('Error fetching patient', error);
      }
    });
  }

  onSubmit() {
  const id = this.patient.id;

  this.patientService.updatePatient(id, this.patient).subscribe({
    next: (data) => {
      console.log('Updated:', data);
      this.goToDocDash();
    },
    error: (error) => {
      console.error('Update failed', error);
    }
  });
}


  goToDocDash() {
    this.router.navigate(['/docdash']);
  }

  logout(){
    this.authService.logout();
this.router.navigate(['home']);
  }

}
