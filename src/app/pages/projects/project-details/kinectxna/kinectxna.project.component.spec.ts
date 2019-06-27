import { ProjectItemComponent } from 'src/app/components/project-item/project-item.component';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ModalComponent } from './../../../../components/modal/modal.component';
import { ProjectSectionComponent } from './../../../../components/project-section/project-section.component';
import { KinectXNAProjectComponent } from './kinectxna.project.component';

describe('KinectXNAProjectComponent', () => {
  let component: KinectXNAProjectComponent;
  let dom: HTMLElement;
  let fixture: ComponentFixture<KinectXNAProjectComponent>;

  let projectSectionComponent: ProjectSectionComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        KinectXNAProjectComponent,
        ProjectSectionComponent,
        ProjectItemComponent,
        ModalComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(KinectXNAProjectComponent);
    fixture.detectChanges();

    component = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;

    projectSectionComponent = fixture.debugElement.query(By.directive(ProjectSectionComponent)).componentInstance;
  }));

  it('should create the project component', () => {
    expect(component).toBeTruthy();
  });

  it('should have set a project item title', () => {
    expect(projectSectionComponent.title).not.toEqual('');
  });

  it('should have set a project item subtext', () => {
    expect(projectSectionComponent.subtext).not.toEqual('');
  });

  it('should have set a project item background image', () => {
    expect(projectSectionComponent.image).not.toEqual('');
  });

  it('should contain a header in the project details modal', () => {
    givenProjectModalIsOpen();

    const element = dom.querySelector('h2');

    expect(element).toBeTruthy();
  });

  it('should contain content in the project details modal', () => {
    givenProjectModalIsOpen();

    const element = dom.querySelector('article');

    expect(element).toBeTruthy();
  });

  function givenProjectModalIsOpen() {
    const projectItemLink: HTMLElement = dom.querySelector('a');
    projectItemLink.click();
    fixture.detectChanges();
  }
});
