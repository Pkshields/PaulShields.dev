import { Location } from '@angular/common';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RoutableModalComponent } from './routable-modal.component';

describe('RoutableModalComponent', () => {
  let component: RoutableModalComponent;
  let dom: HTMLElement;
  let fixture: ComponentFixture<RoutableModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        RoutableModalComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutableModalComponent);
    fixture.detectChanges();

    component = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;
  }));

  it('should create the modal component', () => {
    expect(component).toBeTruthy();
  });

  it('should be configured to close the modal when the background is clicked', () => {
    const modalBackground = dom.querySelector('#modal') as HTMLElement;

    expect(modalBackground.getAttribute('routerlink')).toEqual('..');
  });

  it('should not close the modal when anything in the modal article is clicked', () => {
    const modalArticle = dom.querySelector('article') as HTMLElement;
    const onClickEvent = new Event('click');
    const stopPropagationSpy = spyOn(onClickEvent, 'stopPropagation');

    modalArticle.dispatchEvent(onClickEvent);

    expect(stopPropagationSpy).toHaveBeenCalled();
  });
});
