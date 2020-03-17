import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PatientService, Patient} from '../Services/patient.service';
@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  navigate: any;
  patientID: string;
  myId = null;
  patient: Patient;

  constructor(private activatedRoute: ActivatedRoute, private patientService: PatientService) {
    this.sideMenu();
  }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    this.patient = this.patientService.getPatient(this.myId);
  }

  sideMenu()
  {
    this.navigate =
    [

      {
        title : "Check-Up",
        url   : "/checkup",
        icon  : "home"
      },
      {
        title : "Admission",
        url   : "/chat",
      },
      {
        title : "Laboratory",
        url   : "/contacts",
      },
      {
        title : "Pharmacy",
        url   : "/medicine",
      },
    ]
  }

}
