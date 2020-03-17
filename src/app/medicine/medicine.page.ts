import { Component, OnInit } from '@angular/core';
import {MedicineService,Medicine} from '../Services/medicine.service';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.page.html',
  styleUrls: ['./medicine.page.scss'],
})
export class MedicinePage implements OnInit {

  constructor(private medicineService: MedicineService) { }
  medicines: Medicine[]

  ngOnInit() {
    this.medicines = this.medicineService.getMedicines();
  }

}
