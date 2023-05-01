import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThePage } from './the.page';

const routes: Routes = [
  {
    path: '',
    component: ThePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThePageRoutingModule {}
