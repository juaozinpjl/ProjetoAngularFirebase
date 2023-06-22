import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LakituPage } from './lakitu.page';

const routes: Routes = [
  {
    path: '',
    component: LakituPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LakituPageRoutingModule {}
