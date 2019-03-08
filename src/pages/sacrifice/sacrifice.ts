import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnetimesacrificePage } from './../onetimesacrifice/onetimesacrifice';
import { ReoccurringsacrificePage } from './../reoccurringsacrifice/reoccurringsacrifice';
//import { ReoccourringsacrificePage } from './../reoccourringsacrifice/reoccourringsacrifice;


/**
 * Generated class for the SacrificePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sacrifice',
  templateUrl: 'sacrifice.html',
})
export class SacrificePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 onetime() {
    this.navCtrl.push(OnetimesacrificePage);
  }

   reoccurring() {
    this.navCtrl.push(ReoccurringsacrificePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SacrificePage');
  }

}
