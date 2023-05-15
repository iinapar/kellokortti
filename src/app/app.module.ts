import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserviewComponent } from './userview/userview.component';
import { CdTimerModule } from 'angular-cd-timer';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, UserviewComponent, TimerComponent],
  imports: [BrowserModule, AppRoutingModule, CdTimerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
