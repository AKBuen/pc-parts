import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurPageRoutingModule } from './our-routing.module';

import { OurPage } from './our.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurPageRoutingModule
  ],
  declarations: [OurPage]
})
export class OurPageModule {}
