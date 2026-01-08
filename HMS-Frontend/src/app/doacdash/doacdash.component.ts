import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { AuthService } from '../login.service';

@Component({
  selector: 'app-doacdash',
  templateUrl: './doacdash.component.html',
  styleUrls: ['./doacdash.component.css']
})
export class DoacdashComponent {

  constructor(private patientService:PatientService ,private authService:AuthService   , private router:Router) { }

patients    :   Patient [ ] =  [];
ngOnInit(): void {
    this.getPatient();
}
getPatient(){

  this.patientService.getPatientList().subscribe(data=>{
    this.patients=data;
  });
}
updatePatient(id:number){
  this.router.navigate(['update-patient',id]);
}

viewPatient(id:number){
  this.router.navigate(['view-patient',id]);
}

  deletePatient(id:number){
    this.patientService.deletePatient(id).subscribe(data=>{
      console.log(data);
      this.getPatient();
    });
  }
  logout(){
    this.authService.logout();
this.router.navigate(['home']);
  }
}
