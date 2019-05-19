import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: [ './project-item.component.scss' ]
})
export class ProjectItemComponent {
  @Input() title: string;
  @Input() subtext: string;
  @Input() image: string;

  @Output() itemClicked = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) { }

  getBackgroundImage() {
    if (this.image) {
      return this.sanitizer.bypassSecurityTrustStyle(`url(${this.image})`);
    }

    return 'none';
  }

  triggerItemClicked() {
    this.itemClicked.emit();
  }
}
