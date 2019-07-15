import { ProjectItemComponent } from 'src/app/components/project-item/project-item.component';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let dom: HTMLElement;
  let fixture: ComponentFixture<ProjectsComponent>;

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

    fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();

    component = fixture.debugElement.componentInstance;
    dom = fixture.debugElement.nativeElement;
  }));

  it('should create the projects component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain links to projects', () => {
    const projectItemComponents = fixture.debugElement.queryAll(By.directive(ProjectItemComponent));

    expect(projectItemComponents.length).toBeGreaterThan(0);
  });

  it('should contain unique routes on all projects', () => {
    const projectItems = dom.querySelectorAll('app-project-item');
    const usedRoutes = [];

    projectItems.forEach(item => {
      const routerLink = item.getAttribute('routerlink');

      expect(routerLink).not.toBeNull();
      expect(routerLink).not.toEqual('');
      expect(usedRoutes).not.toContain(routerLink);

      usedRoutes.push(routerLink);
    });
  });
});
