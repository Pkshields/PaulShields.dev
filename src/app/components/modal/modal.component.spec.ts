import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let dom: HTMLElement;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ModalComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    fixture.detectChanges();

    component = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;
  }));

  it('should create the modal component', () => {
    expect(component).toBeTruthy();
  });

  it('should show the modal', () => {
    component.show();
    fixture.detectChanges();

    const modalElement = dom.querySelector('#modal');

    expect(component.isVisible).toBeTruthy();
    expect(modalElement).toBeTruthy();
  });

  it('should hide the modal', () => {
    component.hide();
    fixture.detectChanges();

    const modalElement = dom.querySelector('#modal');

    expect(component.isVisible).toBeFalsy();
    expect(modalElement).toBeFalsy();
  });

  it('should default to the modal being hidden', () => {
    expect(component.isVisible).toBeFalsy();

    const modalElement = dom.querySelector('#modal');
    expect(modalElement).toBeFalsy();
  });

  it('should hide the modal when the background is clicked', () => {
    component.show();
    fixture.detectChanges();

    const modalBackground: HTMLElement = dom.querySelector('#modal');
    modalBackground.click();
    fixture.detectChanges();

    expect(dom.querySelector('#modal')).toBeFalsy();
  });

  it('should emit the modal is shown changed event when modal is shown', () => {
    const spy = spyOn(component.isVisibleChange, 'emit');

    component.show();

    expect(spy).toHaveBeenCalledWith(true);
  });

  it('should emit the modal is shown changed event when modal is hidden', () => {
    const spy = spyOn(component.isVisibleChange, 'emit');

    component.hide();

    expect(spy).toHaveBeenCalledWith(false);
  });
});
