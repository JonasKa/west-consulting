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

  prevScrollPosition: number;
  scrolledUp: boolean = false;
  scrollPositionTop: boolean = true;


  constructor(@Inject(DOCUMENT) private document) {

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    this.scrollPositionTop = number === 0 ? true : false;

    this.scrolledUp = number < this.prevScrollPosition ? true : false;

    console.log('scrollpos:' + number);
    console.log('prevScrollpos:' + this.prevScrollPosition);
    console.log('this.scrollPositionTop:' + this.scrollPositionTop);
    console.log('this.scrolledUp:' + this.scrolledUp);
    this.prevScrollPosition = number;
  }
}
