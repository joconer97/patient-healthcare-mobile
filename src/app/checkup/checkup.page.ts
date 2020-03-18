import { Component, OnInit } from '@angular/core';
import { Checkup , CheckupService} from '../Services/checkup.service';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-checkup',
  templateUrl: './checkup.page.html',
  styleUrls: ['./checkup.page.scss'],
})
export class CheckupPage implements OnInit {

  checkup: Checkup[];
  patientCheckup: Checkup[];
  sample: Observable<Checkup[]>;
  myId = null;

  constructor(private checkupService: CheckupService,private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(){ 
      this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    }

  ngAfterContentChecked() {
      // viewChild is set after the view has been initialized
      console.log('hello');
      this.checkup = this.checkupService.getCheckup(this.myId);
    }

  getCheckup(){
    this.checkup = this.checkupService.getCheckup(this.myId);
  }




}
