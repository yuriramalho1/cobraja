import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { ClienteService } from '../../services/cliente.service';

@IonicPage()
@Component({
  selector: 'page-cliente-cadastro',
  templateUrl: 'cliente-cadastro.html',
})
export class ClienteCadastroPage {
  
  public title = "Adicionar Cliente"
  public cliente: any;
  public reload: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
              private clienteService: ClienteService, private toastCtrl: ToastController) {
    this.cliente = (this.navParams.get('clienteEdit') ? this.navParams.get('clienteEdit') : {});
    this.title   = (this.navParams.get('clienteEdit') ? "Editar Cliente" : "Adicionar Cliente");
  }

  ionViewDidLoad() {
    
  }

  voltar(){
    this.viewCtrl.dismiss(this.reload);
  }

  confirmar(){
    this.cliente.tipoUsuario = 'CLIENTE';
    this.clienteService.salvar(this.cliente)
    .then(data =>{
      if(data.id && data.id > 0){
        this.reload = true;
        let toast = this.toastCtrl.create({
          message: 'Cliente ' + (this.navParams.get('clienteEdit') ? 'Editado' : 'Cadastrado') + ' com Sucesso!',
          duration: 3000,
          position: 'bottom'
        })
        toast.present();

        if(!this.navParams.get('clienteEdit')){
          let formCadastro : any;
          
          formCadastro = document.getElementById('formCadastro');
          formCadastro.reset();
        }
      }
    })
    .catch(err =>{
      let toast = this.toastCtrl.create({
        message: `Erro ao ${(this.navParams.get('clienteEdit') ? 'Editar' : 'Cadastrar')} usuário ${err}`,
        duration: 4000,
        position: 'bottom'
      })
      toast.present();
      console.log(err);
    });
  }

}
