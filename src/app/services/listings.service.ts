import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listing } from '../interfaces/listing';
import { AngularFireAuth } from '@angular/fire/auth';


import { Observable, pipe, Subject } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  jobListing:Observable<Listing>;
  lastestJobListing:Observable<Listing>;
  myJobs: Observable<Listing>;


  // Refresh stuff
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  constructor(private http:HttpClient, private auth:AngularFireAuth){
    this.jobListing =  this.http.get<Listing>('https://jobsrus.herokuapp.com/api/listings')

    this.lastestJobListing = this.http.get<Listing>('https://jobsrus.herokuapp.com/api/listings/latest')

    this.auth.onAuthStateChanged(async (user) => {
      if(user) {
        this.myJobs = this.http.get<Listing>(`https://jobsrus.herokuapp.com/api/listings/${user.email}`)
      }
    })
  }

  // REFRESH STUFF
  updateListings() {
    this.jobListing =  this.http.get<Listing>('https://jobsrus.herokuapp.com/api/listings');

    this.lastestJobListing = this.http.get<Listing>('https://jobsrus.herokuapp.com/api/listings/latest')
  }

  addListing(listing:Listing) {
    let postdata = {
      "email": `${listing.email}`,
      "category": `${listing.category}`,
      "title": `${listing.title}`,
      "description": `${listing.description}`,
      "salary": `${listing.salary}`,
      "location": `${listing.location}`,
      "telephone": `${listing.telephone}`
    }

    return this.http.post('https://jobsrus.herokuapp.com/api/listings/add', JSON.stringify(postdata), {headers: {"Content-type": "application/json"}})
              .pipe(
                tap(() => {
                  this._refreshNeeded$.next();
                })
              )
  }

  getJobCategories(category) {
    return this.http.get<Listing>(`https://jobsrus.herokuapp.com/api/listings/category/${category}`).toPromise()
  }

  getMyJob(id:number) {
    return this.http.get<Listing>(`https://jobsrus.herokuapp.com/api/listings/job/${id}`).toPromise()
  }

  deleteListing(id:number) {
    return this.http.delete(`https://jobsrus.herokuapp.com/api/listings/delete/${id}`)
    .pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    )
  }
}
