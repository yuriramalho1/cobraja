import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClientePage } from '../pages/cliente/cliente';
import { CobrancaPage } from '../pages/cobranca/cobranca';
import { CobrancaCadastroPage } from '../pages/cobranca-cadastro/cobranca-cadastro';
import { ClienteCadastroPage } from '../pages/cliente-cadastro/cliente-cadastro';
import { ClienteService } from '../services/cliente.service';
import { HttpModule } from '@angular/http';
import { AppService } from '../services/app.service';
import { PopoverMenuComponent } from '../components/popover-menu/popover-menu';
import { IonicSelectableModule } from 'ionic-selectable';
import { CobrancaService } from '../services/cobranca.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClientePage,
    ClienteCadastroPage,
    CobrancaPage,
    CobrancaCadastroPage,
    PopoverMenuComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicSelectableModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientePage,
    ClienteCadastroPage,
    CobrancaPage,
    CobrancaCadastroPage,
    PopoverMenuComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppService,
    ClienteService,
    CobrancaService
  ]
})
export class AppModule {}
