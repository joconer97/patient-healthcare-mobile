import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmissionSummaryPage } from './admission-summary.page';

const routes: Routes = [
  {
    path: '',
    component: AdmissionSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmissionSummaryPageRoutingModule {}
