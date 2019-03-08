import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import{Platform}  from 'ionic-angular';

/**
 * Generated class for the InternationalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-international',
  templateUrl: 'international.html',
})
export class InternationalPage {
   private source: any;

  constructor(private platform: Platform, private theInAppBrowser: InAppBrowser,public navCtrl: NavController, public navParams: NavParams) {
this.platform = platform;  
}

 launch(url){
  this.platform.ready().then(() =>{
    this.theInAppBrowser.create(url,"_self", "location=no");
});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternationalPage');
  }

}
