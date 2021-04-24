import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  allWatchList: Array<Object> = [];

  constructor(private http:HttpClient) {

  }

}



