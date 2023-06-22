import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YoshiPage } from './yoshi.page';

const routes: Routes = [
  {
    path: '',
    component: YoshiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoshiPageRoutingModule {}
