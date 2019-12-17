import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home.component.mobile.scss']
})
export class HomeComponent {
  particleCss: object = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    'z-index': -1
  };

  particleParams: object = {
    particles: {
      color: {
        // Colors of the 4 pieces of text on this page. Is there a way to from that from the CSS instead of hardcoding these?
        value: ['#539e53', '#3c8cac', '#8951A0', '#8951A0']
      },
      opacity: {
        value: 0.4
      },
      line_linked: {
        color: '#ffffff',
        opacity: 0.1
      },
      move: {
        speed: 3
      }
    }
  };
}
