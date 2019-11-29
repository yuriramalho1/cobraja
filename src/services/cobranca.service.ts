import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class CobrancaService extends AppService{
  
  constructor(public http : Http, private loader: LoadingController){
    super('cobranca');
  }

  getAll(){
    let load = this.loader.create();
    load.present();

    return this.http.post(`${this.enderecoAPI}/getAll`, '')
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

  salvar(cobranca){
    let load = this.loader.create();
    load.present();

    return this.http.post(`${this.enderecoAPI}/salvar`, JSON.stringify(cobranca))
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