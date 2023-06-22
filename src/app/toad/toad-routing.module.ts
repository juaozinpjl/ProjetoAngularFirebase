import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToadPage } from './toad.page';

const routes: Routes = [
  {
    path: '',
    component: ToadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToadPageRoutingModule {}
