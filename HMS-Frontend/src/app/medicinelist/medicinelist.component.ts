import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';
import { AuthService } from '../login.service';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css'],
})
export class MedicinelistComponent implements OnInit {
  medicines: Medicine[] = [];

  constructor(
    private medicineService: MedicineService,
    authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMedicine();
  }

  getMedicine(): void {
    this.medicineService.getMedicines().subscribe({
      next: (data) => {
        console.log(data);
        this.medicines = data;
      },
      error: (error) => {
        console.error('Error fetching medicines', error);
      },
    });
  }

  update(id: number): void {
    this.router.navigate(['update-medicine', id]);
  }

  delete(id: number): void {
    this.medicineService.deleteMedicine(id).subscribe({
      next: () => {
        console.log('Medicine deleted successfully');
        this.getMedicine();
      },
      error: (error) => {
        console.error('Error deleting medicine', error);
      },
    });
  }
  logout() {
    // this.authService.logout();
    this.router.navigate(['home']);
  }
}
