import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { CadastrarLocalPage } from '../pages/cadastrar-local/cadastrar-local';
import { CadastroDeUsuRioPage } from '../pages/cadastro-de-usu-rio/cadastro-de-usu-rio';
import { LocaisCadastradosPage } from '../pages/locais-cadastrados/locais-cadastrados';
import { CalcularRotaPage } from '../pages/calcular-rota/calcular-rota';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CadastrarLocalPage,
    CadastroDeUsuRioPage,
    LocaisCadastradosPage,
    CalcularRotaPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CadastrarLocalPage,
    CadastroDeUsuRioPage,
    LocaisCadastradosPage,
    CalcularRotaPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}