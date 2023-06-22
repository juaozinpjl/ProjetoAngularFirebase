import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToadPageRoutingModule } from './toad-routing.module';

import { ToadPage } from './toad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToadPageRoutingModule
  ],
  declarations: [ToadPage]
})
export class ToadPageModule {}
