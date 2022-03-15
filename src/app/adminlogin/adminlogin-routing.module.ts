import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminloginPage } from './adminlogin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminloginPageRoutingModule {}
