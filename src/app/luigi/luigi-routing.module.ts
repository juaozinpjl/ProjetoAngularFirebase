import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuigiPage } from './luigi.page';

const routes: Routes = [
  {
    path: '',
    component: LuigiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuigiPageRoutingModule {}
