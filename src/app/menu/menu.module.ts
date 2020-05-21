import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../first/first.module').then( m => m.FirstPageModule)
      },
      {
        path: 'checkup',
        loadChildren: () => import('../checkup/checkup.module').then( m => m.CheckupPageModule)
      },
      {
        path: 'second',
        loadChildren: () => import('../laboratory/laboratory.module').then( m => m.LaboratoryPageModule)
      },
      {
        path: 'admission',
        loadChildren: () => import('../admission/admission.module').then( m => m.AdmissionPageModule)
      },
      {
        path: 'pharmacy',
        loadChildren: () => import('../medicine/medicine.module').then( m => m.MedicinePageModule)
      },
      {
        path: 'bill',
        loadChildren: () => import('../bill/bill.module').then(m => m.BillPageModule)
      },
    ]
  },
  {
    path: 'menu',
    redirectTo: '/menu/first',
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
