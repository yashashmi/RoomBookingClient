import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomSearchComponent } from './room-search/room-search.component';
import{ShowRoomsComponent} from './show-rooms/show-rooms.component';

const routes: Routes = [
  { path: 'room-search', component: RoomSearchComponent },
  { path: 'show-rooms', component: ShowRoomsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
