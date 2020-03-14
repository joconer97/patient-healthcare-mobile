import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckupSummaryPageRoutingModule } from './checkup-summary-routing.module';

import { CheckupSummaryPage } from './checkup-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckupSummaryPageRoutingModule
  ],
  declarations: [CheckupSummaryPage]
})
export class CheckupSummaryPageModule {}
