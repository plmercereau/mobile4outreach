import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { ChatsPage } from '../pages/chats/chats';
import { Meteor } from 'meteor/meteor';
import { LoginPage } from '../pages/login/login';

import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import {SummaryPage} from "../pages/summary/summary";
import {SettingsPage} from "../pages/settings/settings";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;

  constructor(platform: Platform) {
    //TODO modification
    //this.rootPage = Meteor.user() ? ChatsPage : LoginPage;
    this.rootPage = HomePage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (platform.is('cordova')) {
        StatusBar.styleDefault();
        Splashscreen.hide();
      }
    });
  }

  openHome() {
    this.nav.setRoot(HomePage);
  }
  openRegister() {
    this.nav.setRoot(RegisterPage);
  }
  openSummary() {
    this.nav.setRoot(SummaryPage);
  }
  openAnalysis() {
    this.nav.setRoot(HomePage);// TODO Analysis page not set yet
  }
  openSettings() {
    this.nav.setRoot(SettingsPage);
  }
  openHelp(){
    this.nav.setRoot(SettingsPage);// TODO Help page not set yet
  }
}
