import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectProjectionComponent } from './components/direct-projection.component';
import { CardComponent } from './components/card.component';
import { RepeatNGContentComponent } from './components/repeat-ng-content.component';
import { CommonModule } from '@angular/common';
import { RepeatNGTemplateComponent } from './components/repeat-ng-template.component';
import { IconComponent } from './components/icon.component';
import { RepeatNGTemplatewithContextComponent } from './components/repeat-ng-template-with-context.component';
import {
  CardWithDefaultTemplateComponent,
  CardTitleDirective,
  CardSubtitleDirective,
  CardBodyDirective,
 } from './components/card-with-default-template.component';

@NgModule({
  declarations: [
    AppComponent,
    // Examples
    DirectProjectionComponent,
    CardComponent,
    RepeatNGContentComponent,
    RepeatNGTemplateComponent,
    IconComponent,
    RepeatNGTemplatewithContextComponent,
    CardWithDefaultTemplateComponent,
    CardTitleDirective,
    CardSubtitleDirective,
    CardBodyDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
