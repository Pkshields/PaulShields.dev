import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: [ './modal.component.scss', './modal.component.mobile.scss' ]
})
export class ModalComponent {

  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  show() {
    this.setIsVisible(true);
  }

  hide() {
    this.setIsVisible(false);
  }

  private setIsVisible(value: boolean) {
    this.isVisible = value;
    this.isVisibleChange.emit(this.isVisible);
  }
}
