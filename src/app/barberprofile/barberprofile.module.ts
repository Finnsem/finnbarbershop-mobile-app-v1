import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarberprofilePageRoutingModule } from './barberprofile-routing.module';

import { BarberprofilePage } from './barberprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarberprofilePageRoutingModule
  ],
  declarations: [BarberprofilePage]
})
export class BarberprofilePageModule {}
