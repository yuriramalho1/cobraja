import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { CobrancaService } from '../../services/cobranca.service';
import { ClienteService } from '../../services/cliente.service';

@IonicPage()
@Component({
  selector: 'page-cobranca-cadastro',
  templateUrl: 'cobranca-cadastro.html',
})
export class CobrancaCadastroPage {

  public title = "Enviar Cobrança";
  public cobranca: any;
  public reload: boolean;
  public labelJurosMes = "Percentual";
  public listaClientes: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,
              private cobrancaService: CobrancaService, private toastCtrl: ToastController, private clienteService: ClienteService) {
    this.cobranca = (this.navParams.get('cobrancaEdit') ? this.navParams.get('cobrancaEdit') : {tipoMulta: 'PERCENTUAL'});
    this.title    = (this.navParams.get('cobrancaEdit') ? "Editar Cobranca" : "Enviar Cobrança");

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

  voltar(){
    this.viewCtrl.dismiss(this.reload);
  }

  confirmar(){
    this.cobrancaService.salvar(this.cobranca)
    .then(data =>{
      if(data.id && data.id > 0){
        this.reload = true;
        let toast = this.toastCtrl.create({
          message: 'Cobrança ' + (this.navParams.get('cobrancaEdit') ? 'Editada' : 'Enviada') + ' com Sucesso!',
          duration: 3000,
          position: 'bottom'
        })
        toast.present();

        if(!this.navParams.get('cobrancaEdit')){
          let formCadastro : any;
          
          formCadastro = document.getElementById('formCadastro');
          formCadastro.reset();
        }
      }
    })
    .catch(err =>{
      let toast = this.toastCtrl.create({
        message: `Erro ao ${(this.navParams.get('cobrancaEdit') ? 'Editar' : 'Enviar')} cobrança ${err}`,
        duration: 4000,
        position: 'bottom'
      })
      toast.present();
      console.log(err);
    });
  }
}
