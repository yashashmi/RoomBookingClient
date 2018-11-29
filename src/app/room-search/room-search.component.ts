import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RoomDataService } from '../room-data.service';
import { Router } from '@angular/router';

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
    startDate: [''],
    endDate: [''],
  });

  constructor(private formBuilder: FormBuilder, private roomData: RoomDataService, private router:Router) { }

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;
    this.success = true;
    //console.warn(this.searchForm.controls['startDate'].value);

    this.roomData.getAvailableRooms(this.searchForm.controls['startDate'].value, this.searchForm.controls['endDate'].value).subscribe(data => {
      this.availableRooms = data
      //console.log(this.availableRooms)
    })
  }

  bookRoom() {
    //console.log("Book Room invoked");
    this.router.navigate(['book-room']);
  }

}
