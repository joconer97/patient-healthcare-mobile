import { Component, OnInit } from '@angular/core';
import { AdmissionService,Admission } from '../Services/admission.service';
import {Patient, PatientService} from '../Services/patient.service';
import { ModalController } from '@ionic/angular';
import { Platform, ToastController } from '@ionic/angular';
import { AdmissionSummaryPage } from '../admission-summary/admission-summary.page';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.page.html',
  styleUrls: ['./admission.page.scss'],
})
export class AdmissionPage implements OnInit {

  admission: Admission[];
  currentPatient: Patient = <Patient>{};

  constructor(private admissionService: AdmissionService,
              private plt: Platform,
              private patientService: PatientService,
              private toastController: ToastController,
              public modalController: ModalController
    ) { }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadPatient();
    });
  }

  ngAfterContentChecked() {
    this.admission = this.admissionService.getAdmission(this.currentPatient.id);
  }


  async loadPatient(){
    return this.patientService.getCurrentPatient().then((patient) => {
      this.currentPatient = patient;
    })
  }

  async presentModal(id) {
    let selectedAdmission = this.getSelectedAdmission(id);

    const modal = await this.modalController.create({
      component: AdmissionSummaryPage,
      componentProps: {
        'currentPatient': this.currentPatient,
        'admission': selectedAdmission,
      }
    });
    return await modal.present();
  }

  getSelectedAdmission(id){
    let temp;

    this.admission.forEach(a => {
      if(id === a.id){
        temp = a;
      }
    })

    return temp;
  }

}
