import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckupSummaryPage } from './checkup-summary.page';

const routes: Routes = [
  {
    path: '',
    component: CheckupSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckupSummaryPageRoutingModule {}
