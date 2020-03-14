import { Component, OnInit } from '@angular/core';
import { Checkup , CheckupService} from '../Services/checkup.service';
import {AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'app-checkup',
  templateUrl: './checkup.page.html',
  styleUrls: ['./checkup.page.scss'],
})
export class CheckupPage implements OnInit {

  checkup: Checkup[];

  constructor(private checkupService: CheckupService){ 
  }
  ngOnInit() { 

    this.checkupService.getCheckup();
  }


}
