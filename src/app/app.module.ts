import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentSiteComponent } from './current-site/current-site.component';
import { OldSiteComponent } from './old-site/old-site.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentSiteComponent,
    OldSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
