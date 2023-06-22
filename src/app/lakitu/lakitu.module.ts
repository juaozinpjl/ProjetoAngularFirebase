import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LakituPageRoutingModule } from './lakitu-routing.module';

import { LakituPage } from './lakitu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LakituPageRoutingModule
  ],
  declarations: [LakituPage]
})
export class LakituPageModule {}
