import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarioPage } from './wario.page';

const routes: Routes = [
  {
    path: '',
    component: WarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarioPageRoutingModule {}
