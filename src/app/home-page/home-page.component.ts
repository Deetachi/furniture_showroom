import { Component, OnInit } from '@angular/core';
import {MediaChange, MediaObserver} from "@angular/flex-layout";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  opened = true;
  over = 'side';
  watcher: Subscription;

  constructor(mediaObserver: MediaObserver) {
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
  }

  ngOnInit() {
  }

}
