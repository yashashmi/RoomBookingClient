import { Component, OnInit } from '@angular/core';
import { RoomDataService } from '../room-data.service';

@Component({
  selector: 'app-show-rooms',
  templateUrl: './show-rooms.component.html',
  styleUrls: ['./show-rooms.component.css']
})
export class ShowRoomsComponent implements OnInit {
  rooms: Object;
  constructor(private roomData: RoomDataService) { }

  ngOnInit() {
    this.roomData.getAllRooms().subscribe(data => {
      this.rooms = data
      console.log(this.rooms)
    });
  }
}
