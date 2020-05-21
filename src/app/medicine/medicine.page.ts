import { Component, OnInit } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import {MedicineService,Medicine} from '../Services/medicine.service';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.page.html',
  styleUrls: ['./medicine.page.scss'],
})
export class MedicinePage implements OnInit {

  medicines: Medicine[]

  constructor(private medicineService: MedicineService,private plt: Platform) {
      this.plt.ready().then(() => {
        this.loadMedicine();
      });
  }

  ngOnInit() {
  
  }

  async loadMedicine() {
    return this.medicines = this.medicineService.getMedicines();
  }

  

}
