import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaisyPageRoutingModule } from './daisy-routing.module';

import { DaisyPage } from './daisy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaisyPageRoutingModule
  ],
  declarations: [DaisyPage]
})
export class DaisyPageModule {}
