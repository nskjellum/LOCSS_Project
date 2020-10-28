import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router: Router) {}

  onClickAddMeasurement() {
    //if(this.router.url.indexOf('tabs/tab3') > -1 || (this.router.url.indexOf('tabs/tab1') > -1 && this.router.url.split('/').length > 3)) {
     // this.router.navigateByUrl('/tabs/tab1/' + this.router.url.split('/')[3]);
    //} else {
      this.router.navigateByUrl('/tabs/tab1/');
   // }
  }
}
