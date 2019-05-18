import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { DummyComponent } from 'src/testing/mocks/dummy-component';

describe('AppComponent', () => {
  let component: AppComponent;
  let dom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'experience', component: DummyComponent },
          { path: 'skills', component: DummyComponent },
          { path: 'projects', component: DummyComponent },
          { path: 'contact', component: DummyComponent }
        ])
      ],
      declarations: [
        AppComponent,
        DummyComponent
      ],
      providers: [ RouterTestingModule ]
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

    component.toggleMobileMenu();
    const secondMenuPosition = component.menuIsOpen;
    expect(secondMenuPosition).not.toEqual(initialMenuPosition);

    component.toggleMobileMenu();
    const thirdMenuPosition = component.menuIsOpen;
    expect(thirdMenuPosition).not.toEqual(secondMenuPosition);
  });

  it('should close the mobile menu', () => {
    component.menuIsOpen = false;
    component.closeMobileMenu();
    expect(component.menuIsOpen).toEqual(false);

    component.menuIsOpen = true;
    component.closeMobileMenu();
    expect(component.menuIsOpen).toEqual(false);
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

  it('should close the mobile menu when any nav element is clicked', () => {
    const elements = dom.querySelector('nav').querySelectorAll('li > a');

    elements.forEach((value, key, parent) => {
      const navElement = value as HTMLElement;
      component.menuIsOpen = true;

      navElement.click();

      expect(component.menuIsOpen).toEqual(false);
    });
  });

  it('should navigate to experience when the nav button is clicked', fakeAsync(() => {
    assertThatNavLinkWorks('experience', '/experience');
  }));

  it('should navigate to skills when the nav button is clicked', fakeAsync(() => {
    assertThatNavLinkWorks('skills', '/skills');
  }));

  it('should navigate to projects when the nav button is clicked', fakeAsync(() => {
    assertThatNavLinkWorks('projects', '/projects');
  }));

  it('should navigate to contact when the nav button is clicked', fakeAsync(() => {
    assertThatNavLinkWorks('contact', '/contact');
  }));

  function assertThatNavLinkWorks(navId: string, path: string) {
    const location = TestBed.get(Location);
    const element = dom.querySelector('nav').querySelector(`li > a#${navId}`) as HTMLElement;

    element.click();
    tick();

    expect(location.path()).toEqual(path);
  }
});
