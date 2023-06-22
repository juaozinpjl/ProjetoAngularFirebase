import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonkeyPageRoutingModule } from './donkey-routing.module';

import { DonkeyPage } from './donkey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonkeyPageRoutingModule
  ],
  declarations: [DonkeyPage]
})
export class DonkeyPageModule {}
