import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenciarAnimalPageRoutingModule } from './gerenciar-animal-routing.module';

import { GerenciarAnimalPage } from './gerenciar-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciarAnimalPageRoutingModule
  ],
  declarations: [GerenciarAnimalPage]
})
export class GerenciarAnimalPageModule {}
