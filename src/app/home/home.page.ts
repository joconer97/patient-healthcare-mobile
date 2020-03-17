import { Component, OnInit } from '@angular/core';
import {PatientService, Patient} from '../Services/patient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private patientService: PatientService, private router: Router) {}

  patient: Patient[];
  currentPatient: Patient;
  patientID: string;

  ngOnInit() {
  }

  login(){
    this.currentPatient = this.patientService.validatePatient(this.patientID);
    this.router.navigate([`member/${this.currentPatient.id}`]);
  }

}
