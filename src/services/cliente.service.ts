import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class ClienteService extends AppService{
  
  constructor(public http : Http, private loader: LoadingController){
    super('cliente');
  }

  getAllClientes(){
    let load = this.loader.create();
    load.present();

    return this.http.post(`${this.enderecoAPI}/getAllClientes`, '')
    .toPromise()
    .then(res => <any[]>res.json())
    .then(data => {
        load.dismiss();
        return data
    })
    .catch(()=>{
      load.dismiss();
    })
  }

  salvar(cliente){
    let load = this.loader.create();
    load.present();

    return this.http.post(`${this.enderecoAPI}/salvar`, JSON.stringify(cliente))
    .toPromise()
    .then(res => <any>res.json())
    .then(data => {
        load.dismiss();
        return data
    })
    .catch(()=>{
      load.dismiss();
    })
  }
}