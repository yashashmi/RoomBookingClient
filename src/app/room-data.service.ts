import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { EventEmitter } from 'events';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookRoomComponent } from './book-room/book-room.component';

@Injectable({
  providedIn: 'root'
})
export class RoomDataService {

  bookingDetails: object;
  private subject = new BehaviorSubject<FormGroup>(null);
  response: Object;

  sendFormValues(formValues: FormGroup) {
    //console.log(formValues);
    this.subject.next(formValues);
  }

  recieveFormValues(): Observable<FormGroup> {
    return this.subject.asObservable();
  }


  //currentRoomId = this.roomId.asObservable();

  constructor(private http: HttpClient) { }

  getAllRooms() {
    return this.http.get(environment.api_url + 'RoomsInfo/GetAllRooms');
  }

  getAvailableRooms(startTime: string, endTime: string) {
    const options =
    {
      params: new HttpParams().set('startTime', '\'' + startTime + '\'').append('endTime', '\'' + endTime + '\'')
    };
    return this.http.get(environment.api_url + 'RoomAvailability/GetAvailableRooms', options);
  }

  bookRoom(roomBookingData: any) {
    this.http.post(environment.api_url + 'RoomBooking/BookRoom', roomBookingData,{headers: { 'Content-type': 'application/json; charset=utf-8'}})
    .subscribe(res => console.log(res));
  }

}