import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HairstylePage } from './hairstyle.page';

const routes: Routes = [
  {
    path: '',
    component: HairstylePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HairstylePageRoutingModule {}
