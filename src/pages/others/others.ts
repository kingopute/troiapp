import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OnetimeothersPage } from './../onetimeothers/onetimeothers';
import { ReoccurringothersPage } from './../reoccurringothers/reoccurringothers';
/**
 * Generated class for the OthersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name :'others'
})
@Component({
  selector: 'page-others',
  templateUrl: 'others.html',
})
export class OthersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OthersPage');
  }

   onetime() {
    this.navCtrl.push(OnetimeothersPage);
  }

   reoccurring() {
    this.navCtrl.push(ReoccurringothersPage);
  }

}
