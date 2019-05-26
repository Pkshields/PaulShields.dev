import { ModalComponent } from './../../../../components/modal/modal.component';
import { ProjectSectionComponent } from './../../../../components/project-section/project-section.component';
import { GBPS3ProjectComponent } from './gbps3.project.component';

import { async, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { ProjectItemComponent } from 'src/app/components/project-item/project-item.component';
import { By } from '@angular/platform-browser';

describe('GBPS3ProjectComponent', () => {
  let component: GBPS3ProjectComponent;
  let dom: HTMLElement;

  let projectSectionComponent: ProjectSectionComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        GBPS3ProjectComponent,
        ProjectSectionComponent,
        ProjectItemComponent,
        ModalComponent
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(GBPS3ProjectComponent);
    fixture.detectChanges();

    component = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;

    projectSectionComponent = fixture.debugElement.query(By.directive(ProjectSectionComponent)).componentInstance;
  }));

  it('should create the gbps3 project component', () => {
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
});
