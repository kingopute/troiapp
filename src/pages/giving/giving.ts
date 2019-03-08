import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnlinegivingPage } from '../onlinegiving/onlinegiving';
import { InternationalPage } from '../international/international';
/**
 * Generated class for the GivingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-giving',
  templateUrl: 'giving.html',
})
export class GivingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GivingPage');
  }

navigateTo(page)
  {
     this.navCtrl.push(page);
  }


 local() {
    this.navCtrl.push(OnlinegivingPage);
  }

international(){
   this.navCtrl.push(InternationalPage);
}




}
