import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html'
})
export class ProjectSectionComponent {
  @Input() title: string;
  @Input() subtext: string;
  @Input() image: string;

  detailsModalIsVisible = false;

  showDetailsModal() {
    this.detailsModalIsVisible = true;
  }
}
