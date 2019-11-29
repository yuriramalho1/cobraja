import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the PopoverMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover-menu',
  templateUrl: 'popover-menu.html'
})
export class PopoverMenuComponent {

  constructor(private viewCtrl: ViewController) {

  }

  dismiss(acao: string){
    this.viewCtrl.dismiss(acao);
  }

}
