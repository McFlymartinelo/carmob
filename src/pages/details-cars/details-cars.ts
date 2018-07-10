import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {details} from "../../models/details";
import {FirebaseProvider} from "../../provider/firebase/firebase";
import {FirebaseListObservable} from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-details-cars',
  templateUrl: 'details-cars.html',
})
export class DetailsCarsPage {

  details: details;
  index: string;
  nameModel; nameBrand; logo: string;
  carsItems: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.carsItems = this.firebaseProvider.getCarsItems();
    this.details = this.navParams.get('details');
    this.index = this.navParams.get('index');
    this.nameModel = this.navParams.get('nameModel');
    this.nameBrand = this.navParams.get('nameBrand');
    this.logo = this.navParams.get('logo');
    console.log('index details', this.index);
    console.log('nameBrand details', this.nameBrand);

  }



}
