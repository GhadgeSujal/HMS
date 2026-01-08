import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

 constructor(private httpClient:HttpClient) { }
private baseUrl="http://localhost:8080/api/v2/appointments";



  getAllAppointments():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
    
      }

 
createAppointment(appointment: Appointment): Observable<Appointment> {
  return this.httpClient.post<Appointment>(
    'http://localhost:8080/api/v2/appointments',
    appointment
  );
}

deleteAppointment(id: number) {
  return this.httpClient.delete(
    `http://localhost:8080/api/v2/appointment/${id}`
  );
}

}
