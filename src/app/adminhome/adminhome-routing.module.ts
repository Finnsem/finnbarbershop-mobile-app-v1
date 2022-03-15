import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminhomePage } from './adminhome.page';

const routes: Routes = [
  {
    path: '',
    component: AdminhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminhomePageRoutingModule {}
