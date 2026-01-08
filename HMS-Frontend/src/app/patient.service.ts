import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) { }
private baseUrl="http://localhost:8080/api/v1";

getPatientList() :Observable<Patient[]>{

  return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

deletePatient(id: number) {
  return this.httpClient.delete(
    `http://localhost:8080/api/v1/patient/${id}`
  );
}
createPatient(patient: Patient): Observable<Object> {
  return this.httpClient.post(`${this.baseUrl}/patient`, patient);
}

getPatientById(id: number): Observable<Patient> {
  return this.httpClient.get<Patient>(`${this.baseUrl}/patient/${id}`);
}

updatePatient(id: number, patient: Patient): Observable<Object> {
  return this.httpClient.put(`${this.baseUrl}/patient/${id}`, patient); 
}

}