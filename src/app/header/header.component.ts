import {Component, Inject, ViewEncapsulation, HostListener, OnInit} from '@angular/core';
//import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  prevScrollPosition: number = 0;
  scrolledUp: boolean = false;
  scrollPositionTop: boolean = true;

  constructor() {

  }


  ngOnInit() {
  }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset;
    this.scrollPositionTop = number === 0 ? true : false;
    this.scrolledUp = number < this.prevScrollPosition ? true : false;
    this.prevScrollPosition = number;
  }
}
