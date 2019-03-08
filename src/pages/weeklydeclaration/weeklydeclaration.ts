//import { MinistryDetailsPage } from './../ministry-details/ministry-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';


import { WeeklydeclarationdetailsPage } from './../weeklydeclarationdetails/weeklydeclarationdetails';
/**
 * Generated class for the WeeklydeclarationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weeklydeclaration',
  templateUrl: 'weeklydeclaration.html',
})
export class WeeklydeclarationPage {
weeklydeclaration = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   firebase.database().ref('weeklydeclaration').on('value', snapshot => {
      this.weeklydeclaration = snapshot.val().reverse();
    });

  }
series($event, item) {
    this.navCtrl.push(WeeklydeclarationdetailsPage, {item: item});
     //this.navCtrl.push('abajidetails', {item: item});
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeeklydeclarationPage');
  }

}
