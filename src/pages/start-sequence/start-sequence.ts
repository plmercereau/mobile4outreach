import { Component } from '@angular/core';

import {NavController} from 'ionic-angular';
import {SearchPatientPage} from "./search-patient";
import {NewPatientPage} from "./new-patient";

@Component({
  selector: 'page-start-sequence',
  templateUrl: 'start-sequence.html'
})
export class StartSequencePage {
  constructor(public navCtrl: NavController) {
  }
  firstVisit(){
    this.navCtrl.push(NewPatientPage);
  }
  searchPatient(){
    this.navCtrl.push(SearchPatientPage);
  }
  getTriageStack(){
    //TODO
  }
}
