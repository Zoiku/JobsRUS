import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../../services/listings.service';
import { Listing } from '../../interfaces/listing';
@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss'],
})
export class JobDetailPage implements OnInit {
  id:number = 0;
  listing:Listing[];

  constructor(private activatedRoute:ActivatedRoute, private listingService: ListingsService) { }

  ngOnInit() {
    this.listing = this.listingService.joblistings.filter(job => job.id === parseInt(this.activatedRoute.snapshot.paramMap.get('id')));

    console.log(this.listing);
  }

}
