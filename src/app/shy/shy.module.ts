import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShyPageRoutingModule } from './shy-routing.module';

import { ShyPage } from './shy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShyPageRoutingModule
  ],
  declarations: [ShyPage]
})
export class ShyPageModule {}
