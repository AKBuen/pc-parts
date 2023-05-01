import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmokePageRoutingModule } from './smoke-routing.module';

import { SmokePage } from './smoke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmokePageRoutingModule
  ],
  declarations: [SmokePage]
})
export class SmokePageModule {}
