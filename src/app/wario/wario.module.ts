import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarioPageRoutingModule } from './wario-routing.module';

import { WarioPage } from './wario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarioPageRoutingModule
  ],
  declarations: [WarioPage]
})
export class WarioPageModule {}
