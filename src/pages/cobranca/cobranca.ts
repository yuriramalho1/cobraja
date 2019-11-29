import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { PopoverMenuComponent } from '../../components/popover-menu/popover-menu';
import { CobrancaCadastroPage } from '../cobranca-cadastro/cobranca-cadastro';
import { CobrancaService } from '../../services/cobranca.service';

@IonicPage()
@Component({
  selector: 'page-cobranca',
  templateUrl: 'cobranca.html',
})
export class CobrancaPage {


  public listaCobrancas: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private popCtrl: PopoverController,
              private modalCtrl: ModalController, private cobrancaService: CobrancaService) {
    this.listaCobrancas = [];
    this.consultaCobranca();
  }

  ionViewDidLoad() {
 
  }

  consultaCobranca(){
    this.cobrancaService.getAll()
    .then(lista =>{
      this.listaCobrancas = (lista ? lista : []);
    })
    .catch(err =>{
      console.log(err);
    })
  }

  popover(cobranca: any){
    let popMenu = this.popCtrl.create(PopoverMenuComponent, {}, {
      cssClass: 'popover-menu',
      enableBackdropDismiss: true
    });

    popMenu.present();

    popMenu.onDidDismiss(acao =>{
      switch(acao){
        case 'editar':  {this.toCadastro(cobranca); break;}
        case 'excluir': {this.deletar(cobranca); break;}
      }
    })
  }

  deletar(cobranca: any){
    // FALTANDO SERVIÇO DE EXCLUIR
  }

  toCadastro(cobranca?: any){
    let modal = this.modalCtrl.create(CobrancaCadastroPage, {
      cobrancaEdit: cobranca
    });

    modal.present();

    modal.onDidDismiss(reload =>{
      if(reload){
        this.consultaCobranca();
      }
    })
  }

}
