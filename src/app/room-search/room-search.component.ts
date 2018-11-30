import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RoomDataService } from '../room-data.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'room-search',
  templateUrl: './room-search.component.html',
  styleUrls: ['./room-search.component.css']
})
export class RoomSearchComponent implements OnInit {

  availableRooms: Object;
  submitted = false;
  success = false;

  searchForm = this.formBuilder.group({
    roomId: [''],
    startDate: [''],
    endDate: [''],
  });

  constructor(private formBuilder: FormBuilder, private roomData: RoomDataService, private router: Router) { }



  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    this.success = true;
    //console.warn(this.searchForm.value);

    this.roomData.getAvailableRooms(this.searchForm.controls['startDate'].value, this.searchForm.controls['endDate'].value).subscribe(data => {
      this.availableRooms = data
      //console.log(this.availableRooms)
    })
  }

  bookRoom(roomId: string) {
    //this.formValueChange.emit(this.searchForm.value);
    //this.roomData.rommBookingId(roomId);
    //console.log("Book Room invoked");
    this.searchForm.controls['roomId'].setValue(roomId);
    //console.warn(this.searchForm.value);
    this.roomData.sendFormValues(this.searchForm);
    this.router.navigate(['book-room']);
  }

}
