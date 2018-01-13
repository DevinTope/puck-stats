import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamService } from './team.service';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { ConferenceService } from './conference.service';
import { DivisionService } from './division.service';
import { DivisionComponent } from './division/division.component';
import { PlayerComponent } from './player/player.component';
import { PlayerService } from './player.service';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    DivisionComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TeamService,
    MessageService,
    ConferenceService,
    DivisionService,
    PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
