import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


export interface Admission{
  id: number
}
@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  admission: any[] = [];

  constructor(db: AngularFireDatabase) {
    db.list('/Admission').valueChanges().subscribe(res => {
      res.forEach(r => {
        this.admission.push(r);
      })
    })
  }

  getAdmission(patientID: string){
    let temp = [];

    this.admission.forEach(a => {
      if(a.patient.id === patientID){
        temp.push(a);
      }
    })
    return temp;
  }
}
