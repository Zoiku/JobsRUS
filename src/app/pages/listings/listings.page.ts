import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../../services/listings.service';
import { Listing } from '../../interfaces/listing';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {
  category:string = '';
  listing:Listing[];

  constructor(private activatedRoute: ActivatedRoute, private listingService: ListingsService) { }

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category');
    this.listing = this.listingService.joblistings.filter(job => job.category === this.category);
  }
}
