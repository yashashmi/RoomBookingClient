import { Component, OnInit } from '@angular/core';
import { RoomAvailabilityService } from '../room-availability.service';

@Component({
  selector: 'app-room-availability',
  templateUrl: './room-availability.component.html',
  styleUrls: ['./room-availability.component.css']
})
export class RoomAvailabilityComponent implements OnInit {
  public roomData: Array<any>;
  public currentRoom: any;

 // @Input() roomData: Array<any>;

  constructor(private roomAvailabilityService: RoomAvailabilityService) {
    roomAvailabilityService.get().subscribe((data: any) => this.roomData = data);
  }

  ngOnInit() {
  }

}
