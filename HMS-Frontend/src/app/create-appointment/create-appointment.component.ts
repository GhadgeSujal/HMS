import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Add this
import { Appointment } from '../appointment';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
// import { AdminauthService } from '../adminauth.service';
import { AuthService } from '../login.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {

  appointment: Appointment = new Appointment();

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private authService:AuthService
  ) {}

  // Called on form submit
  onSubmit(form: NgForm) {
    if (form.invalid) {
      // alert('Please fill all required fields!');
      return; 
    }

    this.saveAppointment(form);
  }

  saveAppointment(form: NgForm) {
    this.appointmentService.createAppointment(this.appointment)
      .subscribe({
        next: (data) => {
          console.log('Saved appointment:', data);
          form.resetForm();                                                 
          this.goTOAppointment();                                  
        },
        error: (err) => {
          console.error('Error saving appointment:', err);
          alert('Failed to save appointment. Please try again.');
        }
      });
  }

  goTOAppointment() {
    this.router.navigate(['/appointmentlist']);
  }

  testClick() {
    alert('Button click works');
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
