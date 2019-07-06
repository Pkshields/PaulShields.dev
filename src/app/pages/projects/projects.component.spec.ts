import { ProjectItemComponent } from 'src/app/components/project-item/project-item.component';

import { Type } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ModalComponent } from './../../components/modal/modal.component';
import { ProjectSectionComponent } from './../../components/project-section/project-section.component';
import { BombcastRadioProjectComponent } from './project-details/bombcastradio/bombcastradio.project.component';
import { BrainfuckProjectComponent } from './project-details/brainfuck/brainfuck.project.component';
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
  let fixture: ComponentFixture<ProjectsComponent>;

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
        BrainfuckProjectComponent,

        ProjectSectionComponent,
        ProjectItemComponent,
        ModalComponent
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

  it('should include the bombcast radio project component', () => {
    assertThatThisPageIncludesComponent(BombcastRadioProjectComponent);
  });

  it('should include the brainfuck project component', () => {
    assertThatThisPageIncludesComponent(BrainfuckProjectComponent);
  });

  it('should include the bulletheli project component', () => {
    assertThatThisPageIncludesComponent(BulletHeliProjectComponent);
  });

  it('should include the foodiy project component', () => {
    assertThatThisPageIncludesComponent(FooDIYProjectComponent);
  });

  it('should include the game frameworkd project component', () => {
    assertThatThisPageIncludesComponent(GameFrameworksProjectComponent);
  });

  it('should include the game of life project component', () => {
    assertThatThisPageIncludesComponent(GameOfLifeProjectComponent);
  });

  it('should include the gbps3 project component', () => {
    assertThatThisPageIncludesComponent(GBPS3ProjectComponent);
  });

  it('should include the kineckxna project component', () => {
    assertThatThisPageIncludesComponent(KinectXNAProjectComponent);
  });

  it('should include the muscreenmanager project component', () => {
    assertThatThisPageIncludesComponent(MuScreenManagerProjectComponent);
  });

  it('should include the particle system project component', () => {
    assertThatThisPageIncludesComponent(ParticleSystemProjectComponent);
  });

  it('should include the physics4k project component', () => {
    assertThatThisPageIncludesComponent(Physics4KProjectComponent);
  });

  it('should include the super easy php templating project component', () => {
    assertThatThisPageIncludesComponent(SuperEasyPHPTemplatingProjectComponent);
  });

  it('should include the the pixel underground project component', () => {
    assertThatThisPageIncludesComponent(ThePixelUndergroundProjectComponent);
  });

  it('should include the undead redemption project component', () => {
    assertThatThisPageIncludesComponent(UndeadRedemptionProjectComponent);
  });

  it('should include the vlappy man project component', () => {
    assertThatThisPageIncludesComponent(VlappyManProjectComponent);
  });

  it('should include the web physics project component', () => {
    assertThatThisPageIncludesComponent(WebPhysicsProjectComponent);
  });

  it('should include the windows 8 apps project component', () => {
    assertThatThisPageIncludesComponent(Windows8AppsProjectComponent);
  });

  function assertThatThisPageIncludesComponent(T: Type<any>): any {
    const childComponent = fixture.debugElement.query(By.directive(T)).componentInstance;
    expect(childComponent).toBeTruthy();
  }
});
