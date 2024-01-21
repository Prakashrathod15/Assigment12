import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssigIImagerotateComponent } from './components/assig-i-imagerotate/assig-i-imagerotate.component';
import { Assigment2Component } from './components/assigment2/assigment2.component';
import { Assigment3Component } from './components/assigment3/assigment3.component';
import { Assigment4Component } from './components/assigment4/assigment4.component';

@NgModule({
  declarations: [
    AppComponent,
    AssigIImagerotateComponent,
    Assigment2Component,
    Assigment3Component,
    Assigment4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
