import { Component } from '@angular/core';

import {NavController} from 'ionic-angular';
import {ChooseServicePage} from "./choose-service";

@Component({
  selector: 'page-new-patient',
  templateUrl: 'new-patient.html'
})
export class NewPatientPage {
  constructor(public navCtrl: NavController) {
  }
  addPatient(){
    this.navCtrl.push(ChooseServicePage);
  }
}
