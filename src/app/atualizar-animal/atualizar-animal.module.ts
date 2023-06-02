import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarAnimalPageRoutingModule } from './atualizar-animal-routing.module';

import { AtualizarAnimalPage } from './atualizar-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarAnimalPageRoutingModule
  ],
  declarations: [AtualizarAnimalPage]
})
export class AtualizarAnimalPageModule {}
