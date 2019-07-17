import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Offer } from 'src/app/shared/classes/offer';
import { promise } from 'protractor';

import { Observable } from 'rxjs';
import { interval } from 'rxjs';


/* import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
 */

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  //offer: Offer;

  offers: Offer[];
  //offer: Offer;

  data: any;
  votos: number;

  lowValue: number = 0;
  highValue: number = 9;

  // MatPaginator Inputs
  longitudRegistros = 0;
  pageSize = 9;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private apiService: ApiService, private router: Router) { }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  voteUp(id) {

    /* let x: Offer = this.offers.find(elem => { return elem.id === id });
    if (isNaN(x.votos)) x.votos=0;
    x.votos += 1;
    this.apiService.editOffer$(id, x).subscribe(); */


    /*  this.apiService.getOffer$(id).toPromise().then( x => {
          if (isNaN(x.votos)) x.votos=0;
          x.votos += 1;
          return x;
        }).then( p => {
          this.apiService.editOffer$(id, p).subscribe();
        });
    */

    this.apiService.getOffer$(id).subscribe(x => {
      let e: Offer = this.offers.find(elem => elem.id === id);
      if (isNaN(x.votos)) { x.votos = 0; }
      x.votos += 1;
      e.votos = x.votos;
      this.apiService.editOffer$(id, x).subscribe();
    });

  }

  voteDown(id) {
    this.apiService.getOffer$(id).subscribe(x => {
      let e: Offer = this.offers.find(elem => elem.id === id);
      if (isNaN(x.votos)) { x.votos = 0; }
      if (x.votos > 0) { x.votos -= 1; }
      e.votos = x.votos;
      this.apiService.editOffer$(id, x).subscribe();
      });
  }

  getOffers() {
    this.apiService.getOffers$().subscribe(e => {
      this.offers = e;
      this.longitudRegistros = this.offers.length;
    });
  }

  deleteOffer(id) {
    this.apiService.deleteOffer$(id).subscribe(data => {
      this.data = data;
      this.getOffers();
    });
  }

  //@Input() getOffers$: Observable<any>; -> No va (*)

  ngOnInit() {

    this.getOffers();
    interval(500).subscribe(x => {
      this.getOffers();
    });

    //this.getOffers$ = Observable.interval(1000).startWith(0).switchMap(() => this.getOffers()); -> No va (*)
//    this.getOffers(); // -> Sin intervalo de tiempo
  }

}
