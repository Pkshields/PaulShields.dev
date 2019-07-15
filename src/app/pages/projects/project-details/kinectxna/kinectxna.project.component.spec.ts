import { RoutableModalComponent } from 'src/app/components/routable-modal/routable-modal.component';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { KinectXNAProjectComponent } from './kinectxna.project.component';

describe('KinectXNAProjectComponent', () => {
  let component: KinectXNAProjectComponent;
  let dom: HTMLElement;
  let fixture: ComponentFixture<KinectXNAProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        KinectXNAProjectComponent,
        RoutableModalComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(KinectXNAProjectComponent);
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
