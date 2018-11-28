import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomDataService {

  constructor(private http: HttpClient) { }

  getAllRooms(){
    return this.http.get('https://roombookingapidev.azurewebsites.net/api/RoomsInfo/GetAllRooms')
  }
}
