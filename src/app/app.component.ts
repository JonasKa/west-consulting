import {Component, Inject, ViewEncapsulation, HostListener} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/global-styles.scss', './app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app';


}
