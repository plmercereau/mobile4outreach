import { Component } from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  category:any;
  data:any;
  rubric:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = navParams.get('category');// todo quelque chose me dit que ça pourrait être plus joli...
    this.data = navParams.get('data');
    this.rubric = navParams.get('rubric');
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  increment(index){
    // TODO ajouter un délai de latence entre deux clicks?
    // TODO changer la couleur du bouton lorsque la valeur a été modifiée?
    // TODO ajouter un bouton "enregistrer" -> par conséquent mettre un prompt "êtes-vous sûr de quitter sans enregister"
    // TODO bouton "undo" décrémenter la dernière valeur
    // TOD bouton "reset"?
    this.data[index]++;
  }
}
