import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})

export class ItemDetailPage {
  item: any;

  constructor(
    public navCtrl: NavController
    ,navParams: NavParams
    ,items: Items
    ,public sanitizer: DomSanitizer
    ) {
    this.item = navParams.get('item') || [];
  }

  assembleHtml(strHTML:any){
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }

}
