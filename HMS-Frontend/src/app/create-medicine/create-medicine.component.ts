import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';
// import { DocauthService } from '../docauth.service';
import { AuthService } from '../login.service';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent {

  medicine : Medicine = new Medicine();  


  constructor(private medicineService:MedicineService ,private router:Router,private authService:AuthService) { } 
  
  saveMedicine(){
  this.medicineService.createMedicine(this.medicine).subscribe(data=>{
    console.log(data);  
  });
}

  onSubmit(){
        this.saveMedicine();
        console.log(this.medicine);
        this.goToViewMedicineList();
  }

  goToViewMedicineList(){
    this.router.navigate(['/medicinelist']);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['home']);
  }
}