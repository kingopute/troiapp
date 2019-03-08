import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SermonsPage } from '../sermons/sermons';
import { WelcomePage } from '../welcome/welcome';
import { DevotionPage } from '../devotion/devotion';
import { MorePage } from '../more/more';
import { EventsPage } from '../events/events';
import { GivingPage } from '../giving/giving';
import { StreamPage } from '../stream/stream';
import { OnlinegivingPage } from '../onlinegiving/onlinegiving';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
 tab1Root: any = SermonsPage;
   tab2Root: any = EventsPage;
  tab3Root: any = GivingPage;
  tab4Root: any = StreamPage;
  tab5Root: any = MorePage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
