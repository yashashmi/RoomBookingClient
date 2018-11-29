import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomDataService {

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
}
