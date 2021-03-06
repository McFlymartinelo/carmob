import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";


@Injectable()
export class FirebaseProvider{

  constructor(public afd: AngularFireDatabase){}

  getCarsItems(){
    return this.afd.list('/carsItems/');
  }

  addItem(name) {
    this.afd.list('/carsItems/').push(name);
  }

  getMeeting(){
    return this.afd.list('/Meetings/');
  }

  public getRasso(): FirebaseListObservable<any[]>{
    return this.afd.list('/Rasso/')
  }
}
