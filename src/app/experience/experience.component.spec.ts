import { async, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let dom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ExperienceComponent
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();

    component = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;
  }));

  it('should create the skills component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a timeline showing my experience', () => {
    const elements = dom.querySelectorAll('ul');
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });

  it('should contain a timeline element for Instil Software', () => {
    runElementWithHeaderExistsTest('Instil Software');
  });

  it('should contain a timeline element for Bitnet', () => {
    runElementWithHeaderExistsTest('Bitnet');
  });

  it('should contain a timeline element for CME Group', () => {
    runElementWithHeaderExistsTest('CME Group');
  });

  it('should contain a timeline element for Level Seven', () => {
    runElementWithHeaderExistsTest('Level Seven');
  });

  it('should contain a link to my full cv', () => {
    const elements = dom.querySelectorAll('a');

    let result = false;
    elements.forEach((value, key, parent) => {
      result = result || value.href.search('assets/cv/CV-PaulShields.pdf') !== -1;
    });

    expect(result).toBeTruthy();
  });

  function runElementWithHeaderExistsTest(header: string) {
    const elements = dom.querySelectorAll('li > .content > h4');

    let result = false;
    elements.forEach((value, key, parent) => {
      result = result || value.textContent === header;
    });

    expect(result).toBeTruthy();
  }
});
