import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClienteCadastroPage } from './cliente-cadastro';

@NgModule({
  declarations: [
    ClienteCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(ClienteCadastroPage),
  ],
})
export class ClienteCadastroPageModule {}
