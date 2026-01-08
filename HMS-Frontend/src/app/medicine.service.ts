import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseUrl = 'http://localhost:8080/api/v3/medicines';

  constructor(private httpClient: HttpClient) {}

  getMedicines(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(this.baseUrl);
  }

  createMedicine(medicine: Medicine): Observable<Medicine> {

    return this.httpClient.post<Medicine>(this.baseUrl, medicine);
  }

  getMedicineById(id: number): Observable<Medicine> {
    return this.httpClient.get<Medicine>(`${this.baseUrl}/${id}`);
  }

  updateMedicine(id: number, medicine: Medicine): Observable<Medicine> {
    return this.httpClient.put<Medicine>(`${this.baseUrl}/${id}`, medicine);
  }

  deleteMedicine(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
