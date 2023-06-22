import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaluigiPageRoutingModule } from './waluigi-routing.module';

import { WaluigiPage } from './waluigi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaluigiPageRoutingModule
  ],
  declarations: [WaluigiPage]
})
export class WaluigiPageModule {}
