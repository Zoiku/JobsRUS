import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  allListings:Array<Object> = [];

  constructor(private http:HttpClient) {
    http.get('http://localhost:3000/api/listings').toPromise()
      .then(data => Object.assign(this.allListings, data))
  }

}
