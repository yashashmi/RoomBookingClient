import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomDataService {

  constructor(private http: HttpClient) { }

  getAllRooms() {
    let apiUrl: string = environment.api_url + 'RoomsInfo/GetAllRooms'
    return this.http.get(apiUrl);
  }
}
