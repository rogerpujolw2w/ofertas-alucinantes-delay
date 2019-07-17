import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/shared/classes/offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  public offer: Offer;
  public identifier: any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(miParams => {this.identifier = miParams.id; });
    this.apiService.getOffer$(this.identifier).subscribe(e => this.offer = e);
  }

}
