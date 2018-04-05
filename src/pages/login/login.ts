import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroDeUsuRioPage } from '../cadastro-de-usu-rio/cadastro-de-usu-rio';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  
  goToCadastroDeUsuRio(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDeUsuRioPage);

  }
  public gotoHome() {
    this.navCtrl.setRoot(HomePage);
  }
}
