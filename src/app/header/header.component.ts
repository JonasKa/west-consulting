import {Component, Inject, ViewEncapsulation, HostListener, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document) {

  }


  ngOnInit() {
  }

  prevScrollPosition: number;
  scrolledUp: boolean = false;
  scrollPositionTop: boolean = true;



  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    this.scrollPositionTop = number === 0 ? true : false;
    this.scrolledUp = number < this.prevScrollPosition ? true : false;
    this.prevScrollPosition = number;
  }
}
