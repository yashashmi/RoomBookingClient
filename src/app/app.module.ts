import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RoomSearchComponent } from './room-search/room-search.component';
import { ShowRoomsComponent } from './show-rooms/show-rooms.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RoomSearchComponent,
    ShowRoomsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ],


  bootstrap: [AppComponent]
})
export class AppModule { }