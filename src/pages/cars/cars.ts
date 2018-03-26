import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {FirebaseProvider} from "../../provider/firebase/firebase";
import {FirebaseListObservable} from "angularfire2/database";
import {DetailsCarsPage} from "../details-cars/details-cars";

@IonicPage()
@Component({
  selector: 'page-cars',
  templateUrl: 'cars.html',
})
export class CarsPage {

  carsItems: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.carsItems = this.firebaseProvider.getCarsItems();

  }

  onLoadDetails(index : number){
    this.navCtrl.push(DetailsCarsPage, {index: index});
  }

}
