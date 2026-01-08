import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';
import { Observable } from 'rxjs';
// import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';
import { AuthService } from '../login.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  apointments:Appointment[]=[];
  constructor(private appointmentService: AppointmentService,private authService:AuthService, private router:Router) {}
  ngOnInit():void{
    this.getAppointment();
   }

   getAppointment(){
    this.appointmentService.getAllAppointments().subscribe(data=>{
      console.log(data);
      this.apointments=data;
    })
   }
   delete(id:number){
    this.appointmentService.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAppointment();
    })
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
