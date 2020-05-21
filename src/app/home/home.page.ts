import { Component, OnInit } from '@angular/core';
import {PatientService, Patient} from '../Services/patient.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private patientService: PatientService, 
    private router: Router,
    public alertController: AlertController,
    public storage: Storage) {}

  patient: Patient[];
  currentPatient;
  patientID: string;

  ngOnInit() {
    this.storage.clear();
  }

  async failedLoginAlert(){
    const alert = await this.alertController.create({
      header: 'Patient Healtcare',
      subHeader: 'Failed to login',
      message: 'Please check your Patient Identification Card',
      buttons: ['OK']
    })

    await alert.present();
      let result = await alert.onDidDismiss();
  }

  login(){
    this.storage.clear();
    this.currentPatient = this.patientService.validatePatient(this.patientID);

    if(this.currentPatient == null){
      this.failedLoginAlert();
      return;
    }

    this.patientService.setCurrentPatient(this.currentPatient);

    this.router.navigate(['menu']);
  }

}
