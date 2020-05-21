import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmissionSummaryPageRoutingModule } from './admission-summary-routing.module';

import { AdmissionSummaryPage } from './admission-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmissionSummaryPageRoutingModule
  ],
  declarations: [AdmissionSummaryPage]
})
export class AdmissionSummaryPageModule {}
