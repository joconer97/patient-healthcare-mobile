import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  navigate : any;
  constructor() {
    this.sideMenu();
  }

  ngOnInit() {
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Check-Up",
        url   : "/checkup",
        icon  : "home"
      },
      {
        title : "Admission",
        url   : "/chat",
        icon  : "chatboxes"
      },
      {
        title : "Laboratory",
        url   : "/contacts",
        icon  : "contacts"
      },
    ]
  }

}
