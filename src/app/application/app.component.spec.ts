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

  it('should render title in a h1 and h2 tag', () => {
    expect(dom.querySelector('h1').textContent).toContain('Paul Shields');
    expect(dom.querySelector('h2').textContent).toContain('Developer');
  });
});
