import { Component, OnInit } from '@angular/core';
import {Bill, BillService} from '../Services/bill.service';
import { Platform, ToastController } from '@ionic/angular';
import {Patient, PatientService} from '../Services/patient.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {

  bill: Bill[];
  total: number;
  currentPatient: Patient = <Patient>{};

  constructor(
    private billService: BillService,
    private plt: Platform,
    private patientService: PatientService,
    ) { }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadPatient();
    });
  }

  ngAfterContentChecked() {
    this.bill = this.billService.getBill(this.currentPatient.id);
    this.total = 0;
    this.getTotalBill();
  }

  getTotalBill(){
    this.bill.forEach(b => {
      this.total += b.total;
    })
  }

  async loadPatient(){
    return this.patientService.getCurrentPatient().then((patient) => {
      this.currentPatient = patient;
    })
  }

}
