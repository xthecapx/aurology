import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Abcd2} from '../vascular/abcd2/abcd2';
import {Nihss} from '../vascular/nihss/nihss';
import {Ranking} from '../vascular/ranking/ranking';
import {Toast} from '../vascular/toast/toast';

@Component({
  templateUrl: 'build/pages/vascular/vascular.html'
})

export class VascularPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(private navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [
      {title: 'TOAST', note: 'detalles', icon: ''},
      {title: 'ABCD2', note: 'detalles', icon: ''},
      {title: 'Ranking', note: 'detalles', icon: ''},
      {title: 'NIHSS', note: 'detalles', icon: ''}
    ];

    for(let i = 0; i < this.items.length; i++) {
      this.items[i].icon = this.icons[Math.floor(Math.random() * this.icons.length)];
    }
  }

  itemTapped(event, item) {
    var navegivate;

    switch (item.title) {
      case "TOAST":
        navegivate = Toast;
        break;
      case "ABCD2":
        navegivate = Abcd2;
        break;
      case "Ranking":
        navegivate = Ranking;
        break;
      case "NIHSS":
        navegivate = Nihss;
        break;
      default:
        console.log("The page doesn't exist");
    }

    this.navCtrl.push(navegivate, {
      item: item
    });
  }
}
