import {Component} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss', './landing_animations.component.scss']
})
export class LandingComponent {

  timeOfYear = new Array(9, 10).indexOf(new Date().getMonth()) > -1 ? "leaves" : "sea";

  constructor() {
  }

}
