import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmokePage } from './smoke.page';

const routes: Routes = [
  {
    path: '',
    component: SmokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmokePageRoutingModule {}
