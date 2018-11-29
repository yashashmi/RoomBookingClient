import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RoomSearchComponent } from './room-search/room-search.component';
import { ShowRoomsComponent } from './show-rooms/show-rooms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookRoomComponent } from './book-room/book-room.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RoomSearchComponent,
    ShowRoomsComponent,
    BookRoomComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
