import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocaisCadastradosPage } from '../locais-cadastrados/locais-cadastrados';

@Component({
  selector: 'page-cadastrar-local',
  templateUrl: 'cadastrar-local.html'
})
export class CadastrarLocalPage {

  constructor(public navCtrl: NavController) {
  }
  goToLocaisCadastrados(){
    this.navCtrl.setRoot(LocaisCadastradosPage);
  }
}
