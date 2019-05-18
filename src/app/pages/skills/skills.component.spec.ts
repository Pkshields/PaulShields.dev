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

  it('should contain 4 sections of skills', () => {
    const elements = dom.querySelectorAll('.card');
    expect(elements.length).toEqual(4);
  });

  it('should contain a list of skills in each section', () => {
    const elements = dom.querySelectorAll('.card');

    elements.forEach((value, key, parent) => {
      expect(value.querySelector('li')).not.toBeNull();
    });
  });

  it('should contain a different header in each section of skills', () => {
    const headerIconClasses: string[] = [];
    const skillCards = dom.querySelectorAll('.card');

    skillCards.forEach((card, key, parent) => {
      const skillCardHeader = card.querySelector('.card-title > i');
      const iconExistsOnAnotherCard = headerIconClasses.find((value, index, obj) => value === skillCardHeader.className);

      expect(iconExistsOnAnotherCard).not.toBeTruthy();

      headerIconClasses.push(skillCardHeader.className);
    });
  });

  it('should have a link on each skill', () => {
    const elements = dom.querySelectorAll('li');
    expect(elements.length).toBeGreaterThan(0);

    elements.forEach((value, key, parent) => {
      const aElement = value.querySelector('a');
      expect(aElement).toBeTruthy();
      expect(aElement.attributes.getNamedItem('target').value).toBe('_blank');
    });
  });
});
