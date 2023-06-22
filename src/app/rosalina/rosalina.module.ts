import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RosalinaPageRoutingModule } from './rosalina-routing.module';

import { RosalinaPage } from './rosalina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RosalinaPageRoutingModule
  ],
  declarations: [RosalinaPage]
})
export class RosalinaPageModule {}
