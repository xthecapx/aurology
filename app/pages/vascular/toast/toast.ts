import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/vascular/toast/toast.html'
})
export class Toast {
  selectedItem: any;
  toasts: Array<string>;

  constructor(private navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.toasts = ["1. Infarto aterotrombotico", "2. Infarto cardio embolico", "3. infarto lacunar", "4. Infarto cerebral de causa inhabitual", "5. Infarto indeterminado"];
  }
}
