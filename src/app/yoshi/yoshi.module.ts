import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YoshiPageRoutingModule } from './yoshi-routing.module';

import { YoshiPage } from './yoshi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YoshiPageRoutingModule
  ],
  declarations: [YoshiPage]
})
export class YoshiPageModule {}
