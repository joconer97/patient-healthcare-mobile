import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';



export interface Medicine {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})


export class MedicineService {

  medicine: any[] = [];

  constructor(db: AngularFireDatabase) { 
      db.list('/Medicine').valueChanges().subscribe(res => {
          res.forEach(r => {
            this.medicine.push(r);
          })
      })

  }

  getMedicines()
  {
    console.log(this.medicine);
    return this.medicine;
  }
}
