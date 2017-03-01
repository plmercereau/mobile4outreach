import { Component } from '@angular/core';

import {NavController} from 'ionic-angular';
import {ChooseServicePage} from "./choose-service";

@Component({
  selector: 'page-search-patient',
  templateUrl: 'search-patient.html'
})
export class SearchPatientPage {
  constructor(public navCtrl: NavController) {
  }
  loadPatient(){
    this.navCtrl.push(ChooseServicePage);
  }

}
