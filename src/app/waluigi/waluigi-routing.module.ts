import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaluigiPage } from './waluigi.page';

const routes: Routes = [
  {
    path: '',
    component: WaluigiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaluigiPageRoutingModule {}
