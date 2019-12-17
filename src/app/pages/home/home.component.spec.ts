import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let dom: HTMLElement;

  beforeEach(async(() => {
    // Suppressing warnings caused by NO_ERRORS_SCHEMA
    spyOn(console, 'warn');

    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        HomeComponent
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    component = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 3 lines of text', () => {
    expect(dom.querySelectorAll('p').length).toEqual(3);
  });

  it('should have 4 sections of text contain color', () => {
    const spans = dom.querySelectorAll('span');

    expect(spans.length).toEqual(4);
  });

  it('should contain a different color of text on each color section', () => {
    const colorClasses: string[] = [];
    const spans = dom.querySelectorAll('span');

    spans.forEach((span, key, parent) => {
      const classExistsOnAnotherSpan = colorClasses.find((value, index, obj) => value === span.className);

      expect(classExistsOnAnotherSpan).not.toBeTruthy();

      colorClasses.push(span.className);
    });
  });

  it('should contain a particles element', () => {
    const particlesElement = dom.querySelector('particles');

    expect(particlesElement).toBeTruthy();
  });

  it('should position the particles element in the background', () => {
    const zIndexValue = component.particleCss['z-index'] as number;

    expect(zIndexValue).toBeLessThan(0);
  });
});
