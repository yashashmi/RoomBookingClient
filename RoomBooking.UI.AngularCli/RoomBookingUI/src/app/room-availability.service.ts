import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RoomAvailabilityService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44390/api/RoomsInfo/GetAllRooms';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }
  public get() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }
  
}
