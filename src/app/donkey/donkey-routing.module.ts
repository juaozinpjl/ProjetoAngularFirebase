import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonkeyPage } from './donkey.page';

const routes: Routes = [
  {
    path: '',
    component: DonkeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonkeyPageRoutingModule {}
