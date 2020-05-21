import { Component, OnInit, Input} from '@angular/core';
import {Patient} from '../Services/patient.service';
import {Admission} from '../Services/admission.service';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-admission-summary',
  templateUrl: './admission-summary.page.html',
  styleUrls: ['./admission-summary.page.scss'],
})
export class AdmissionSummaryPage implements OnInit {

  @Input() currentPatient: Patient;
  @Input() admission: Admission;

  constructor(private route: ActivatedRoute,public modalController: ModalController, navParams: NavParams) { }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
