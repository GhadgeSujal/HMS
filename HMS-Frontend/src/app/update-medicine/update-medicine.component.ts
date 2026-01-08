import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
// import { DocauthService } from '../docauth.service';
import { AuthService } from '../login.service';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent {

  medicine :Medicine = new Medicine();
  id:number=0;
  constructor(private route:ActivatedRoute, private medicineService:MedicineService, private router:Router,private authService :AuthService)  { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data;
    },error=>console.log(error));
  }

  onSubmit(){
    this.medicineService.updateMedicine(this.id,this.medicine).subscribe(data=>{
      console.log(data);
      this.goToMedicineList();

    },error=>console.log(error));
  }

    goToMedicineList() {
    this.router.navigate(['/medicinelist']);
  }

   logout(){
    this.authService.logout();
this.router.navigate(['home']);
  }
}
