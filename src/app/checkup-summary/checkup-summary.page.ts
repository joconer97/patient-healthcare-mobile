import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkup-summary',
  templateUrl: './checkup-summary.page.html',
  styleUrls: ['./checkup-summary.page.scss'],
})
export class CheckupSummaryPage implements OnInit {

  private slug : string;

  constructor(private route : ActivatedRoute) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('id');
    console.log(this.slug);
  }

}
