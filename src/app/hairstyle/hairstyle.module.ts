import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HairstylePageRoutingModule } from './hairstyle-routing.module';

import { HairstylePage } from './hairstyle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HairstylePageRoutingModule
  ],
  declarations: [HairstylePage]
})
export class HairstylePageModule {}
