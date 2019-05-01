import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact.component.mobile.scss']
})
export class ContactComponent implements OnInit {

  tweetIds = [
    '1103656558045679617',  // Instil FSB Awards
    '1059718577606017029'   // Blueye end of trip wave
  ];

  constructor() { }

  ngOnInit() { }
}
