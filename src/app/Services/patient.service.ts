import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import {Storage} from '@ionic/storage';

export interface Patient {
  id: string,
  firstname: string,
  middlename: string,
  lastname: string,
}


@Injectable({
  providedIn: 'root'
})


export class PatientService {

  patient:  any[] = [];
  currentPatient: any;

  constructor(private db: AngularFireDatabase,private storage: Storage){
      db.list<Patient>('/Patient').valueChanges().subscribe(res => {
          this.patient = res;
      });
  }
  validatePatient(patientID: string) {
      let temp = null;
      this.patient.forEach(p => {
        if(p.id === patientID){
            temp = p;
        }
        return true;
      })

      return temp;
  }

  getPatient(patientID: string){
    let temp = null;
    this.patient.some(p => {
      if(p.id === patientID){
          temp = p;
      }
      return true;
    })

    return temp;
  }

  setCurrentPatient(patient: Patient): Promise<any> {
    console.log(patient);
    return this.storage.set('currentPatient', patient);
  }
  getCurrentPatient(): Promise<Patient>{
    return this.storage.get('currentPatient');
  }
  
  
}
