import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BodyComponent } from './components/shared/body/body.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';

import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BodyComponent,
    AuthButtonComponent,
    WeatherDisplayComponent,
  

  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev--ld1c96s.us.auth0.com',
      clientId: 'Cg6KVLscH6RqES7JvNJLWkBThREtbe7x'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
