import { BombcastRadioProjectComponent } from './project-details/bombcastradio/bombcastradio.project.component';
import { ModalComponent } from './../../components/modal/modal.component';
import { ProjectSectionComponent } from './../../components/project-section/project-section.component';
import { ProjectsComponent } from './projects.component';
import { async, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { ProjectItemComponent } from 'src/app/components/project-item/project-item.component';
import { GBPS3ProjectComponent } from './project-details/gbps3/gbps3.project.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let dom: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProjectsComponent,

        GBPS3ProjectComponent,
        BombcastRadioProjectComponent,

        ProjectSectionComponent,
        ProjectItemComponent,
        ModalComponent
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();

    component = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;
  }));

  it('should create the projects component', () => {
    expect(component).toBeTruthy();
  });
});
