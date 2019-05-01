import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.component.mobile.scss']
})
export class AppComponent implements OnInit {

  menuIsOpen = false;

  constructor() { }

  ngOnInit() { }

  toggleMobileMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  closeMobileMenu() {
    this.menuIsOpen = false;
  }
}
