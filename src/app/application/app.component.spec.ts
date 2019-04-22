import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Type } from '@angular/core';

describe('AppComponent', () => {
  it('should create the app', () => {
    const app = componentFor(AppComponent);
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 and h2 tag', () => {
    const dom = domFor(AppComponent);
    expect(dom.querySelector('h1').textContent).toContain('Paul Shields');
    expect(dom.querySelector('h2').textContent).toContain('Developer');
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
});

function componentFor<T>(component: Type<T>): T {
  const fixture = TestBed.createComponent(AppComponent);
  return fixture.debugElement.componentInstance;
}

function domFor<T>(component: Type<T>): HTMLElement {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  return fixture.debugElement.nativeElement;
}
