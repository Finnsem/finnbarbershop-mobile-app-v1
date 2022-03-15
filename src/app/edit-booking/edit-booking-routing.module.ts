import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditBookingPage } from './edit-booking.page';

const routes: Routes = [
  {
    path: '',
    component: EditBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditBookingPageRoutingModule {}
