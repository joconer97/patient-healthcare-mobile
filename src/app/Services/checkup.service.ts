import { Injectable,Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';

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
  sample: any[] = [];
  
  constructor(db: AngularFireDatabase, private activatedRoute: ActivatedRoute){ 
      db.list('/Checkup').valueChanges().subscribe(res => {
        res.forEach(r => {
          this.sample.push(r);
        })
      })
  }

  getCheckup(patientID: string)
  {
    let temp = [];

    this.sample.forEach(s => {
      if(s.patientID === patientID)
      {
        temp.push(s);
      }
    })

    return temp;
  }

}
