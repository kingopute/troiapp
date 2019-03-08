import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import firebase from 'firebase';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import{Platform}  from 'ionic-angular';
/**
 * Generated class for the StreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stream',
  templateUrl: 'stream.html',
})
export class StreamPage {
   private source: any;
 latestvideo = [];

  constructor(public navCtrl: NavController,private theInAppBrowser: InAppBrowser, private platform: Platform, public nav: NavController, public navParams: NavParams) {
  
this.platform = platform;
firebase.database().ref('latestvideo').on('value', snapshot => {
      this.latestvideo = snapshot.val().reverse();
    });

}

  launch(url){
  this.platform.ready().then(() =>{
    this.theInAppBrowser.create(url,"_self", "location=no");
});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StreamPage');
  }

}
