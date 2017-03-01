import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {StartSequencePage} from "../start-sequence/start-sequence";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  selectedItem: any;
  items: Array<{date: any, type: string, morbidity:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.items = [];
    for (let i = 1; i < 16; i++) {
      this.items.push({
        date: new Date().setFullYear(2017,1,i),
        type: 'NC',
        morbidity: 'LTRI'
      });
    }
  }

  itemTapped(event, item) {
    //this.navCtrl.push(StartSequencePage, {item: item});
    this.selectedItem = item;
    // TODO faire passer les bons params et utiliser le bon template
  }

  pushStartSequence(){
    this.navCtrl.push(StartSequencePage);
  }

}
