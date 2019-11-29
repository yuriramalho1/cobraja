import { Injectable } from "@angular/core"

@Injectable()
export class AppService {

  public enderecoAPI: string

  constructor(public path: string){
    this.enderecoAPI = `http://192.168.0.3:8080/cobraja/webservice/${path}`
  }
}