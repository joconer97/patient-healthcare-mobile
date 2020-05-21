import { Component, OnInit } from '@angular/core';
import { Checkup , CheckupService} from '../Services/checkup.service';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import {Patient,PatientService} from '../Services/patient.service';
import { Platform, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { CheckupSummaryPage } from '../checkup-summary/checkup-summary.page';
@Component({
  selector: 'app-checkup',
  templateUrl: './checkup.page.html',
  styleUrls: ['./checkup.page.scss'],
})
export class CheckupPage implements OnInit {

  checkup: Checkup[];
  patientCheckup: Checkup[];
  sample: Observable<Checkup[]>;
  myId = null;
  currentPatient: Patient = <Patient>{};

  constructor(
    private checkupService: CheckupService,
    private activatedRoute: ActivatedRoute,
    public storage: Storage,private plt: Platform,
    private patientService: PatientService,
    private toastController: ToastController,
    public modalController: ModalController
    ) { 

  }

  ngOnInit(){ 
      this.plt.ready().then(() => {
        this.loadPatient();
      });
    }

  ngAfterContentChecked() {
      this.checkup = this.checkupService.getCheckup(this.currentPatient.id);
    }

  async presentModal(id) {
      let selectedCheckup = this.getSelectedCheckup(id);

      const modal = await this.modalController.create({
        component: CheckupSummaryPage,
        componentProps: {
          'currentPatient': this.currentPatient,
          'checkup': selectedCheckup,
        }
      });
      return await modal.present();
  }

  getCheckup(){
    this.checkup = this.checkupService.getCheckup(this.myId);
  }
  getSelectedCheckup(id){
    let temp;

    this.checkup.forEach(c => {
      if(id === c.id){
        temp = c;
      }
    })

    return temp;
  }

  async loadPatient(){
    return this.patientService.getCurrentPatient().then((patient) => {
      this.currentPatient = patient;
    })
  }




}
