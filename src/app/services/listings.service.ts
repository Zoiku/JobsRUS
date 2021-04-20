import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http:HttpClient) { }

  getAllListings() {
    return this.http.get('http://localhost:3000/api/listings').toPromise()
  }

  myListings(email:string) {
    return this.http.get('http://localhost:3000/api/listings/email').toPromise()
  }

}
