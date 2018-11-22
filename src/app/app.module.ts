import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomAvailabilityComponent } from './room-availability/room-availability.component';
import { RoomAvailabilityService } from './room-availability.service';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{
  path: '', component: RoomAvailabilityComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    RoomAvailabilityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //AppRoutingModule,
    RouterModule.forRoot(appRoutes)],

  providers: [RoomAvailabilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
