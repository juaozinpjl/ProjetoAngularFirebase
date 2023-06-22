import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuigiPageRoutingModule } from './luigi-routing.module';

import { LuigiPage } from './luigi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuigiPageRoutingModule
  ],
  declarations: [LuigiPage]
})
export class LuigiPageModule {}
