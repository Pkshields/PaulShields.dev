import { NgxTweetModule } from 'ngx-tweet';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './components/modal/modal.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { ProjectSectionComponent } from './components/project-section/project-section.component';
import { AppComponent } from './pages/application/app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { BombcastRadioProjectComponent } from './pages/projects/project-details/bombcastradio/bombcastradio.project.component';
import { BrainfuckProjectComponent } from './pages/projects/project-details/brainfuck/brainfuck.project.component';
import { BulletHeliProjectComponent } from './pages/projects/project-details/bulletheli/bulletheli.project.component';
import { FooDIYProjectComponent } from './pages/projects/project-details/foodiy/foodiy.project.component';
import { GameFrameworksProjectComponent } from './pages/projects/project-details/gameframeworks/gameframeworks.project.component';
import { GameOfLifeProjectComponent } from './pages/projects/project-details/gameoflife/gameoflife.project.component';
import { GBPS3ProjectComponent } from './pages/projects/project-details/gbps3/gbps3.project.component';
import { KinectXNAProjectComponent } from './pages/projects/project-details/kinectxna/kinectxna.project.component';
import { MuScreenManagerProjectComponent } from './pages/projects/project-details/muscreenmanager/muscreenmanager.project.component';
import { ParticleSystemProjectComponent } from './pages/projects/project-details/particlesystem/particlesystem.project.component';
import { Physics4KProjectComponent } from './pages/projects/project-details/physics4k/physics4k.project.component';
import {
   SuperEasyPHPTemplatingProjectComponent
} from './pages/projects/project-details/supereasyphptemplating/supereasyphptemplating.project.component';
import {
   ThePixelUndergroundProjectComponent
} from './pages/projects/project-details/thepixelunderground/thepixelunderground.project.component';
import { UndeadRedemptionProjectComponent } from './pages/projects/project-details/undeadredemption/undeadredemption.project.component';
import { VlappyManProjectComponent } from './pages/projects/project-details/vlappyman/vlappyman.project.component';
import { WebPhysicsProjectComponent } from './pages/projects/project-details/webphysics/webphysics.project.component';
import { Windows8AppsProjectComponent } from './pages/projects/project-details/windows8apps/windows8apps.project.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      SkillsComponent,
      ExperienceComponent,
      ContactComponent,
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

      ModalComponent,
      ProjectItemComponent,
      ProjectSectionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgxTweetModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
