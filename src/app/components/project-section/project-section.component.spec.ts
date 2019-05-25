import { ModalComponent } from './../modal/modal.component';
import { ProjectItemComponent } from 'src/app/components/project-item/project-item.component';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectSectionComponent } from './project-section.component';
import { By } from '@angular/platform-browser';

describe('ProjectSectionComponent', () => {
  let component: ProjectSectionComponent;
  let dom: HTMLElement;
  let fixture: ComponentFixture<ProjectSectionComponent>;

  let projectItemComponent: ProjectItemComponent;
  let modalComponent: ModalComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProjectSectionComponent,
        ProjectItemComponent,
        ModalComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectSectionComponent);
    fixture.detectChanges();

    component = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;

    projectItemComponent = fixture.debugElement.query(By.directive(ProjectItemComponent)).componentInstance;
    modalComponent = fixture.debugElement.query(By.directive(ModalComponent)).componentInstance;
  }));

  it('should create the project section component', () => {
    expect(component).toBeTruthy();
  });

  it('should default the project details modal to be hidden', () => {
    expect(component.detailsModalIsVisible).toBeFalsy();
  });

  it('should trigger the show details modal to be shown', () => {
    component.showDetailsModal();

    expect(component.detailsModalIsVisible).toBeTruthy();
  });

  it('should provide the title to the project item block', () => {
    const title = 'Project Title';

    component.title = title;
    fixture.detectChanges();

    expect(projectItemComponent.title).toBe(title);
  });

  it('should provide the subtext to the project item block', () => {
    const subtext = 'Project Subtext';

    component.subtext = subtext;
    fixture.detectChanges();

    expect(projectItemComponent.subtext).toBe(subtext);
  });

  it('should provide the image to the project item block', () => {
    const image = 'image.jpg';

    component.image = image;
    fixture.detectChanges();

    expect(projectItemComponent.image).toBe(image);
  });

  it('should provide the is hidden property to the modal component', () => {
    component.detailsModalIsVisible = true;
    fixture.detectChanges();

    expect(modalComponent.isVisible).toBeTruthy();

    component.detailsModalIsVisible = false;
    fixture.detectChanges();

    expect(modalComponent.isVisible).toBeFalsy();
  });

  it('should trigger show modal function when the project item block is clicked', () => {
    const element: HTMLElement = dom.querySelector('a');
    element.click();

    expect(component.detailsModalIsVisible).toBeTruthy();
  });
});
