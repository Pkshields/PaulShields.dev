import { ProjectItemComponent } from 'src/app/components/project-item/project-item.component';

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ModalComponent } from './../../components/modal/modal.component';
import { ProjectSectionComponent } from './../../components/project-section/project-section.component';
import { BombcastRadioProjectComponent } from './project-details/bombcastradio/bombcastradio.project.component';
import { BulletHeliProjectComponent } from './project-details/bulletheli/bulletheli.project.component';
import { FooDIYProjectComponent } from './project-details/foodiy/foodiy.project.component';
import { GameFrameworksProjectComponent } from './project-details/gameframeworks/gameframeworks.project.component';
import { GameOfLifeProjectComponent } from './project-details/gameoflife/gameoflife.project.component';
import { GBPS3ProjectComponent } from './project-details/gbps3/gbps3.project.component';
import { KinectXNAProjectComponent } from './project-details/kinectxna/kinectxna.project.component';
import { MuScreenManagerProjectComponent } from './project-details/muscreenmanager/muscreenmanager.project.component';
import { ParticleSystemProjectComponent } from './project-details/particlesystem/particlesystem.project.component';
import { Physics4KProjectComponent } from './project-details/physics4k/physics4k.project.component';
import { SuperEasyPHPTemplatingProjectComponent } from './project-details/supereasyphptemplating/supereasyphptemplating.project.component';
import { ThePixelUndergroundProjectComponent } from './project-details/thepixelunderground/thepixelunderground.project.component';
import { UndeadRedemptionProjectComponent } from './project-details/undeadredemption/undeadredemption.project.component';
import { VlappyManProjectComponent } from './project-details/vlappyman/vlappyman.project.component';
import { WebPhysicsProjectComponent } from './project-details/webphysics/webphysics.project.component';
import { Windows8AppsProjectComponent } from './project-details/windows8apps/windows8apps.project.component';
import { ProjectsComponent } from './projects.component';

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
        WebPhysicsProjectComponent,
        Physics4KProjectComponent,
        ParticleSystemProjectComponent,
        UndeadRedemptionProjectComponent,
        GameOfLifeProjectComponent,
        BulletHeliProjectComponent,
        VlappyManProjectComponent,
        ThePixelUndergroundProjectComponent,
        KinectXNAProjectComponent,
        GameFrameworksProjectComponent,
        MuScreenManagerProjectComponent,
        SuperEasyPHPTemplatingProjectComponent,
        Windows8AppsProjectComponent,
        FooDIYProjectComponent,

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
