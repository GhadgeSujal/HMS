import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { AuthService } from '../login.service';
// import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {

  
  patient :Patient =  new Patient();
  constructor(private patientService:PatientService,private router:Router,private authService:AuthService) {

   } 
   savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log(data);
    });
   }

  onSubmit(){
    this.savePatient();
    this.goToPatientList();
  }

  goToPatientList(){
    this.router.navigate(['/docdash']);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
