import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CobrancaCadastroPage } from './cobranca-cadastro';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [
    CobrancaCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(CobrancaCadastroPage),
    IonicSelectableModule
  ],
})
export class CobrancaCadastroPageModule {}
