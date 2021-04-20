import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  allWatchList: Array<Object> = [];

  constructor(private http:HttpClient) {
    http.get('http://localhost:3000/api/watch').toPromise()
      .then(data => Object.assign(this.allWatchList, data))
  }

}



