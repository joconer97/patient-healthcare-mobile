import { Component, OnInit, Injectable } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Storage } from '@ionic/storage';
import {Patient,PatientService} from '../Services/patient.service';
import { Observable } from 'rxjs';
import { Platform, ToastController } from '@ionic/angular';

@Injectable()

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  currentPatient: Patient = <Patient>{};
  patient: Patient;
  sample: string = '';

  pages = [
    {
      title: 'HOME',
      url : '/menu/home/',
      icon: 'home'
    },
    {
      title: 'BILL',
      url : '/menu/bill',
      icon: 'logo-bitcoin'
    },
    {
      title: 'CHECKUP',
      url : '/menu/checkup/',
      icon: 'albums'
  },
    {
      title: 'ADMISSION',
      url : '/menu/admission',
      icon: 'albums'
    },
    {
      title: 'PHARMACY',
      url : '/menu/pharmacy',
      icon : 'medkit'
    }
  ];

  selectedPath = '';

  constructor(private router: Router,public storage: Storage,private plt: Platform,private patientService: PatientService,private toastController: ToastController)
  { 

    this.plt.ready().then(() => {
      this.storage.ready().then(() => {
        this.loadPatient();
        this.router.navigate(['menu/checkup']);
      })
    });

    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });

  }
  
  ngOnInit() {
  }


  async loadPatient(){
    return this.patientService.getCurrentPatient().then((patient) => {
      this.currentPatient = patient;
    })
  }

  logout(){
    this.storage.clear();
    this.router.navigate(['']);
    
  }

}
