import { DomSanitizer } from '@angular/platform-browser';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectItemComponent } from './project-item.component';
import { Injector, Type } from '@angular/core';

describe('ProjectItemComponent', () => {
  let component: ProjectItemComponent;
  let dom: HTMLElement;
  let fixture: ComponentFixture<ProjectItemComponent>;

  let domSanitizer: DomSanitizer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProjectItemComponent
      ],
    }).compileComponents();

    domSanitizer = TestBed.get(DomSanitizer as Type<DomSanitizer>);

    fixture = TestBed.createComponent(ProjectItemComponent);
    fixture.detectChanges();

    component = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;
  }));

  it('should create the project item component', () => {
    expect(component).toBeTruthy();
  });

  it('should sanitize the background image url', () => {
    const spy = spyOn(domSanitizer, 'bypassSecurityTrustStyle');

    component.image = 'string.jpg';
    component.getBackgroundImage();

    expect(spy).toHaveBeenCalled();
  });

  it('should trigger the item clicked event', () => {
    const spy = spyOn(component.itemClicked, 'emit');

    component.triggerItemClicked();

    expect(spy).toHaveBeenCalled();
  });

  it('should display the item title', () => {
    const title = 'Title';

    component.title = title;
    fixture.detectChanges();

    const element: HTMLElement = dom.querySelector('.project-item-hover p');
    expect(element.innerHTML).toBe(title);
  });

  it('should display the item subtext', () => {
    const subtext = 'Subtext';

    component.subtext = subtext;
    fixture.detectChanges();

    const element: HTMLElement = dom.querySelector('.subtext');
    expect(element.innerHTML).toBe(subtext);
  });

  it('should display the item image', () => {
    const imageUrl = 'image.jpg';

    component.image = imageUrl;
    fixture.detectChanges();

    const element: HTMLElement = dom.querySelector('.project-item');
    expect(element.style.backgroundImage).toContain(imageUrl);
  });

  it('should trigger item clicked event when clicked', () => {
    const spy = spyOn(component.itemClicked, 'emit');

    const element: HTMLElement = dom.querySelector('a');
    element.click();

    expect(spy).toHaveBeenCalled();
  });
});
