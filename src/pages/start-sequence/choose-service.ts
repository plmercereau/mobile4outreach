import { Component } from '@angular/core';

import {NavController} from 'ionic-angular';
import {SearchPatientPage} from "./search-patient";
import {NewPatientPage} from "./new-patient";

@Component({
  selector: 'page-choose-program',
  templateUrl: 'choose-service.html'
})
export class ChooseServicePage {
  constructor(public navCtrl: NavController) {
  }
  selectSRH(){
    //this.navCtrl.push();
  }
  selectFP(){
    //this.navCtrl.push();
  }
  selectPHC(){
    //this.navCtrl.push();
  }
  selectNutrition(){
    //this.navCtrl.push();
  }

}
