import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cadastro-de-usu-rio',
  templateUrl: 'cadastro-de-usu-rio.html'
})
export class CadastroDeUsuRioPage {

  constructor(public navCtrl: NavController) {
  }
  
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
