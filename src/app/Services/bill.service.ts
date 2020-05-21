import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

export interface Bill{
  id: number,
  total: number,
};

@Injectable({
  providedIn: 'root'
})
export class BillService {

  bill: any[] = [];

  constructor(db: AngularFireDatabase) { 
    db.list('/Bill').valueChanges().subscribe(res => {
      this.bill = res;
    })
  }

  getBill(patientID: string){
    let temp = [];

    this.bill.forEach(b =>{
      if(b.patient.id === patientID){
        if(b.isPaid === 0){
          temp.push(b);
        }
      }
    })
    return temp;
  }
}
