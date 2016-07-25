import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/vascular/nihss/nihss.html'
})
export class Nihss {
  selectedItem: any;

  constructor(private navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
}
