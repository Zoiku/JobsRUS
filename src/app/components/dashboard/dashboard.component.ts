import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../../services/listings.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  listings:Array<Object> = [];

  constructor(private listingService:ListingsService) { }

  ngOnInit() {}
}
