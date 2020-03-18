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
  }

  ngOnInit() {
    this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    this.patient = this.patientService.getPatient(this.myId);
    this.sideMenu();
  }

  sideMenu()
  {
    this.navigate =
    [

      {
        title : "Check-Up",
        url   : `/checkup/${this.myId}`,
        icon  : "home"
      },
      {
        title : "Admission",
        url   : "/chat",
        icon : "add"
      },
      {
        title : "Laboratory",
        url   : "/contacts",
        icon : "archive"
      },
      {
        title : "Pharmacy",
        url   : "/analytics",
        icon : "analytics"
      },
    ]
  }

}
