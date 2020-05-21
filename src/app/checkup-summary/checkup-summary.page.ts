import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import {Patient} from '../Services/patient.service';
import {Checkup} from '../Services/checkup.service';

@Component({
  selector: 'app-checkup-summary',
  templateUrl: './checkup-summary.page.html',
  styleUrls: ['./checkup-summary.page.scss'],
})
export class CheckupSummaryPage implements OnInit {

  @Input() currentPatient: Patient;
  @Input() checkup: Checkup;


  private slug : string;
  

  constructor(private route : ActivatedRoute,public modalController: ModalController,navParams: NavParams) {
  }

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
