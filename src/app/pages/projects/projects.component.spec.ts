import { ProjectsComponent } from './projects.component';
import { async, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { ProjectItemComponent } from 'src/app/components/project-item/project-item.component';

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
        ProjectItemComponent
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
