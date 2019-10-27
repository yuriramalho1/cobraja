import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cobrancasPrevistas : number = 5;
  public cobrancasVencida   : number = 0;
  public cobrancasRecebidas : number = 0;

  public label1 : string = 'COBRANÇAS';
  public label2 : string = 'PREVISTAS';
  public label3 : string = 'VENCIDA';
  public label4 : string = 'RECEBIDAS';
  public botao1 : string = 'FATURAMENTO';
  public botao2 : string = 'CLIENTE';
  public botao3 : string = 'RESUMO';

  constructor(public navCtrl: NavController) {

  }

}
