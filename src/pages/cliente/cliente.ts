import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { ClienteCadastroPage } from '../cliente-cadastro/cliente-cadastro';
import { ClienteService } from '../../services/cliente.service';
import { PopoverMenuComponent } from '../../components/popover-menu/popover-menu';

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {

  public listaClientes: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController,
              private clienteService: ClienteService, private popCtrl: PopoverController) {
    this.listaClientes = [];
    this.consultaUsuarios();
  }

  consultaUsuarios(){
    this.clienteService.getAllClientes()
    .then(lista =>{
      this.listaClientes = (lista ? lista : []);
    })
    .catch(err =>{
      console.log(err)
    })
  }

  ionViewDidLoad() {
    
  }

  popover(cliente: any){
    let popMenu = this.popCtrl.create(PopoverMenuComponent, {}, {
      cssClass: 'popover-menu',
      enableBackdropDismiss: true
    });

    popMenu.present();

    popMenu.onDidDismiss(acao =>{
      switch(acao){
        case 'editar':  {this.toCadastro(cliente); break;}
        case 'excluir': {this.deletar(cliente); break;}
      }
    })
  }

  deletar(cliente: any){
    // FALTANDO SERVIÇO DE EXCLUIR
  }

  toCadastro(cliente?: any){
    let modal = this.modalCtrl.create(ClienteCadastroPage, {
      clienteEdit: cliente
    });

    modal.present();

    modal.onDidDismiss(reload =>{
      if(reload){
        this.consultaUsuarios();
      }
    })
  }

}
