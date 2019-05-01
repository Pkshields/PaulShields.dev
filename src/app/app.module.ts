import { NgxTweetModule } from 'ngx-tweet';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/application/app.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';


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
