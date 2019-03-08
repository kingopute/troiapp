import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OnetimefirstfruitPage } from './../onetimefirstfruit/onetimefirstfruit';
import { ReoccourringfirstfruitPage } from './../reoccourringfirstfruit/reoccourringfirstfruit';
/**
 * Generated class for the FirstfruitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firstfruit',
  templateUrl: 'firstfruit.html',
})
export class FirstfruitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstfruitPage');
  }

onetime() {
    this.navCtrl.push(OnetimefirstfruitPage);
  }

   reoccurring() {
    this.navCtrl.push(ReoccourringfirstfruitPage);
  }


}
