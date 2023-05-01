import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThePageRoutingModule } from './the-routing.module';

import { ThePage } from './the.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThePageRoutingModule
  ],
  declarations: [ThePage]
})
export class ThePageModule {}
