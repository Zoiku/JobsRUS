import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(private http:HttpClient) { }

  getMyWatchList() {
     return this.http.get('http://localhost:3000/api/watch').toPromise();
  }

}



