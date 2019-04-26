import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let dom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    component = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the mobile menu on and off', () => {
    const initialMenuPosition = component.menuIsOpen;

    component.toggleMenu();
    const secondMenuPosition = component.menuIsOpen;
    expect(secondMenuPosition).not.toEqual(initialMenuPosition);

    component.toggleMenu();
    const thirdMenuPosition = component.menuIsOpen;
    expect(thirdMenuPosition).not.toEqual(secondMenuPosition);
  });

  it('should render title in a h1 and h2 tag', () => {
    expect(dom.querySelector('h1').textContent).toContain('Paul Shields');
    expect(dom.querySelector('h2').textContent).toContain('Developer');
  });

  it('should render nav bar with 4 nav elements', () => {
    const elements = dom.querySelector('nav').querySelectorAll('li');
    expect(elements.length).toEqual(4);

    elements.forEach((value, key, parent) => {
      expect(value.querySelector('a')).not.toBeNull();
    });
  });

  it('should toggle the mobile menu when menu button is clicked', () => {
    const initialMenuPosition = component.menuIsOpen;
    const menuButton: HTMLElement = dom.querySelector('#menu-button');

    menuButton.click();

    expect(component.menuIsOpen).not.toEqual(initialMenuPosition);
  });
});
