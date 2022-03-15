import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarberprofilePage } from './barberprofile.page';

const routes: Routes = [
  {
    path: '',
    component: BarberprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarberprofilePageRoutingModule {}
