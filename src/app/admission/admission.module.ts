import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmissionPageRoutingModule } from './admission-routing.module';

import { AdmissionPage } from './admission.page';
import { AdmissionSummaryPage } from '../admission-summary/admission-summary.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmissionPageRoutingModule
  ],
  declarations: [AdmissionPage, AdmissionSummaryPage],
  entryComponents: [AdmissionSummaryPage]
})
export class AdmissionPageModule {}
