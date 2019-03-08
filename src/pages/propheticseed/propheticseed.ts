import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnetimepropheticseedPage } from './../onetimepropheticseed/onetimepropheticseed';
import { ReoccourringpropheticseedPage } from './../reoccourringpropheticseed/reoccourringpropheticseed';
/**
 * Generated class for the PropheticseedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name :'propheticseed'
})
@Component({
  selector: 'page-propheticseed',
  templateUrl: 'propheticseed.html',
})
export class PropheticseedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropheticseedPage');
  }

   onetime() {
    this.navCtrl.push(OnetimepropheticseedPage);
  }

   reoccurring() {
    this.navCtrl.push(ReoccourringpropheticseedPage);
  }

}
