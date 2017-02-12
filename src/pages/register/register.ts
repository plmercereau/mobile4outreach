import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {NewEventPage} from "../new-event/new-event";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  selectedItem: any;
  items: Array<{title: string, note: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');


    this.items = [];
    for (let i = 1; i < 16; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(NewEventPage, {item: item});
    // TODO faire passer les bons params et utiliser le bon template
  }

  pushNewEvent(){
    this.navCtrl.push(NewEventPage);
  }

}
