import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RosalinaPage } from './rosalina.page';

const routes: Routes = [
  {
    path: '',
    component: RosalinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RosalinaPageRoutingModule {}
