import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpanishComponent } from './Pages/spanish/spanish.component';
import { EnglishComponent } from './Pages/english/english.component';
import { FrenchComponent } from './Pages/french/french.component';
import { FirstComponent } from './Pages/first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    SpanishComponent,
    EnglishComponent,
    FrenchComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
