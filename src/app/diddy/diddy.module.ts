import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiddyPageRoutingModule } from './diddy-routing.module';

import { DiddyPage } from './diddy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiddyPageRoutingModule
  ],
  declarations: [DiddyPage]
})
export class DiddyPageModule {}
