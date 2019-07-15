import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const projectPagesRoutes: Routes = [
  { path: 'webphysics', component: WebPhysicsProjectComponent },
  { path: 'physics4k', component: Physics4KProjectComponent },
  { path: 'particlesystem', component: ParticleSystemProjectComponent },
  { path: 'undeadredemption', component: UndeadRedemptionProjectComponent },
  { path: 'gameoflife', component: GameOfLifeProjectComponent },
  { path: 'bulletheli', component: BulletHeliProjectComponent },
  { path: 'vlappyman', component: VlappyManProjectComponent },
  { path: 'thepixelunderground', component: ThePixelUndergroundProjectComponent },
  { path: 'gbps3', component: GBPS3ProjectComponent },
  { path: 'bombcastradio', component: BombcastRadioProjectComponent },
  { path: 'kinectxna', component: KinectXNAProjectComponent },
  { path: 'gameframeworks', component: GameFrameworksProjectComponent },
  { path: 'muscreenmanager', component: MuScreenManagerProjectComponent },
  { path: 'sept', component: SuperEasyPHPTemplatingProjectComponent },
  { path: 'windows8apps', component: Windows8AppsProjectComponent },
  { path: 'foodiy', component: FooDIYProjectComponent },
  { path: 'brainfuck', component: BrainfuckProjectComponent }
];

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'experience',  component: ExperienceComponent },
  { path: 'skills',  component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent, children: projectPagesRoutes },
  { path: 'contact',  component: ContactComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
