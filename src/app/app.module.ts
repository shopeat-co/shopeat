import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainLeftSidebarComponent } from './components/main-left-sidebar/main-left-sidebar.component';
import { MainRightSidebarComponent } from './components/main-right-sidebar/main-right-sidebar.component';
import { MainGridElementComponent } from './components/main-grid-element/main-grid-element.component';
import { AppGridInfoComponent } from './components/app-grid-info/app-grid-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainLeftSidebarComponent,
    MainRightSidebarComponent,
    MainGridElementComponent,
    AppGridInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
