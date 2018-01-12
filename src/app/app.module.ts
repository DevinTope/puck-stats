import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamService } from './team.service';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TeamService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
