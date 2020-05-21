import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(public storage: Storage) { }

  ngOnInit() {
    this.storage.get('color').then((name) => {
      console.log('Me: Hey, ' + name + '! You have a very nice name.');
      console.log('You: Thanks! I got it for my birthday.');
    });
  }

}
