import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';


export interface Checkup{
  name : string;
}

@Injectable({
  providedIn: 'root'
})



export class CheckupService {
  sample: any[] = [];

  constructor(db: AngularFireDatabase) { 
      db.list('/checkup').valueChanges().subscribe(res => {
          res.forEach(r => {
            this.sample.push(r);
          })
      })
  }

  getCheckup()
  {
    console.log(this.sample);
    return this.sample;
  }

}
