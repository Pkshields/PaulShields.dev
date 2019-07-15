import { RoutableModalComponent } from 'src/app/components/routable-modal/routable-modal.component';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { FooDIYProjectComponent } from './foodiy.project.component';

describe('FooDIYProjectComponent', () => {
  let component: FooDIYProjectComponent;
  let dom: HTMLElement;
  let fixture: ComponentFixture<FooDIYProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FooDIYProjectComponent,
        RoutableModalComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FooDIYProjectComponent);
    fixture.detectChanges();

    component = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;
  }));

  it('should create the project component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the content in a single modal', () => {
    const modals = fixture.debugElement.queryAll(By.directive(RoutableModalComponent));

    expect(modals.length).toBe(1);
  });

  it('should contain a header in the project details modal', () => {
    const element = dom.querySelector('h2');

    expect(element).toBeTruthy();
  });

  it('should contain content in the project details modal', () => {
    const element = dom.querySelector('article');

    expect(element).toBeTruthy();
  });
});
