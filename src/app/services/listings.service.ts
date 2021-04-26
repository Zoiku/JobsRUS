import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listing } from '../interfaces/listing';
@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  joblistings:Array<Listing> = [];

  constructor(private http:HttpClient) {
    http.get('http://localhost:3000/api/listings').toPromise()
      .then(data => Object.assign(this.joblistings, data))
  }

  addListing(listing:Listing) {
    this.http.post('htt[://localhost:3000/api/listings/add', {listing})
  }
}
