import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';


export interface Patient {
id: string;
}


@Injectable({
  providedIn: 'root'
})


export class PatientService {

  patient: Patient[] = [];

  constructor(db: AngularFireDatabase) {
      db.list<Patient>('/Patient').valueChanges().subscribe(res => {
        this.patient = res;
    })
  }
  
  validatePatient(patientID: string)
  {
    let temp = null;

    this.patient.some(p => {
      if(p.id === patientID)
      {
        temp = p;
      }
    })
    return temp;
  }

  getPatient(patientID: string)
  {
    let temp = null;

    this.patient.some(p => {
      if(p.id === patientID)
      {
          temp = p;
      }
    })

    return temp;
  }
  
}
