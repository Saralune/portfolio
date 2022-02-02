import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    HeaderComponent,
    IntroductionComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
