import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  listings:Array<Object> = [];

  constructor(private http:HttpClient) { }

  async ngOnInit() {
    Object.assign(this.listings, await this.http.get('http://localhost:3000/api/listings').toPromise())
  }
}
