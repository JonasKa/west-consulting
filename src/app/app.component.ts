import {Component, ViewEncapsulation} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

declare var ga: any;

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
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');

        if (event.urlAfterRedirects !== '/about#contact') {
          window.scrollTo(0, 0);
        }
      }
    });
  }

}
