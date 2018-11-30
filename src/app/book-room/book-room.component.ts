import { Component, OnInit } from '@angular/core';
import { RoomDataService } from '../room-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {

  formValues: FormGroup;



  constructor(private roomData: RoomDataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.roomData.recieveFormValues().subscribe(formValues => this.formValues = formValues);
    //console.log(this.formValues);
    //console.log(this.formValues.controls['roomId'].value);
    this.bookRoomForm.controls['roomId'].setValue(this.formValues.controls['roomId'].value);
    this.bookRoomForm.controls['startDate'].setValue(this.formValues.controls['startDate'].value);
    this.bookRoomForm.controls['endDate'].setValue(this.formValues.controls['endDate'].value);
    //this.roomData.currentRoomId.subscribe(roomToBeBooked => this.roomToBeBooked = roomToBeBooked);
  }
  bookRoomForm = this.formBuilder.group({
    roomId: [{ value: '', disabled: true }],
    startDate: [{ value: '', disabled: true }],
    endDate: [{ value: '', disabled: true }],
    name: [''],
    email: [''],
    description: [''],
  });

  onSubmit() {
    var roomBookingObject
     var json =JSON.stringify({
      roomId: this.bookRoomForm.controls['roomId'].value,
      startTime: this.bookRoomForm.controls['startDate'].value,
      endTime: this.bookRoomForm.controls['endDate'].value,
    });
    var dt =JSON.parse(json);
        this.roomData.bookRoom(dt);
//console.log(json);
  }

}
