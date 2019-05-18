import { async, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let dom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
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
});
