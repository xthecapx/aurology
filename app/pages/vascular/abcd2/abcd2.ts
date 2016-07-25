import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/vascular/abcd2/abcd2.html'
})
export class Abcd2 {
  selectedItem: any;

  constructor(private navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
}
