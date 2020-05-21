import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';


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

  constructor(db: AngularFireDatabase,private activatedRoute: ActivatedRoute) { 
    db.list('/Medicine').valueChanges().subscribe(res => {
          res.forEach(m => {
            this.medicine.push(m);
          })
      })
  }

  getMedicines()
  {
    return this.medicine;
  }
}
