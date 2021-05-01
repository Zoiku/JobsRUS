import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../../services/listings.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {
  category:string = '';
  listing:any;

  constructor(private activatedRoute: ActivatedRoute, private listingService:ListingsService, private http: HttpClient) {}

  async ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category');
    this.listing = await this.listingService.getJobCategories(this.category)
  }
}
