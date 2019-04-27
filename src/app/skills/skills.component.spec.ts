import { async, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let dom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SkillsComponent
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(SkillsComponent);
    fixture.detectChanges();

    component = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;
  }));

  it('should create the skills component', () => {
    expect(component).toBeTruthy();
  });
});
