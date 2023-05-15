import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
=======
import { NavbarComponent } from './navbar/navbar.component';
import { UserviewComponent } from './userview/userview.component';
import { CdTimerModule } from 'angular-cd-timer';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, UserviewComponent, TimerComponent],
  imports: [BrowserModule, AppRoutingModule, CdTimerModule],
>>>>>>> e4e9c87a016b400d5005c1955b9989c8cd86c78b
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
