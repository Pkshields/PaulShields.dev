import { NgxTweetModule } from 'ngx-tweet';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/application/app.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';


@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      SkillsComponent,
      ExperienceComponent,
      ContactComponent,
      ProjectsComponent
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
