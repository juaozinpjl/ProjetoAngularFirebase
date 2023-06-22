import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaisyPage } from './daisy.page';

const routes: Routes = [
  {
    path: '',
    component: DaisyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaisyPageRoutingModule {}
