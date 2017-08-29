import {Component, Inject, ViewEncapsulation, HostListener} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {Subscription} from "rxjs/Subscription";
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/global-styles.scss', './app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {


  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0)
      }
    });
  }

}
