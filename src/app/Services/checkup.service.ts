import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';


export interface Checkup {
  assesment: string;
  blood_pressure: string;
  cc: string;
  date: Date;
  gcs: string;
  id: number;
  isTreated: number;
  management: string;
  o2sat: string;
  patientID: string;
  pulse_rate: string;
  respiratory_rate: string;
  temperature: string;
  time_arrived: string;
}

@Injectable({
  providedIn: 'root'
})



export class CheckupService {
  sample: Checkup[] = [];

  constructor(db: AngularFireDatabase) { 
      db.list<Checkup>('/Checkup').valueChanges().subscribe(res => {
          res.forEach(r => {
            if(r.patientID === '452103172020')
            {
                this.sample.push(r);
            }
          })
      })
  }

  getCheckup()
  {
    return this.sample;
  }

}
