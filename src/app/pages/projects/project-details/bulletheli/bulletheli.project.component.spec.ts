import { RoutableModalComponent } from 'src/app/components/routable-modal/routable-modal.component';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { BulletHeliProjectComponent } from './bulletheli.project.component';

describe('BulletHeliProjectComponent', () => {
  let component: BulletHeliProjectComponent;
  let dom: HTMLElement;
  let fixture: ComponentFixture<BulletHeliProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        BulletHeliProjectComponent,
        RoutableModalComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BulletHeliProjectComponent);
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
