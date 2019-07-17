import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/shared/classes/offer';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html',
  styleUrls: ['./offer-add.component.scss']
})
export class OfferAddComponent implements OnInit {

  public offer: Offer;

  public offerData: Offer = {
    id: this.uniqueID(),
    url: '',
    precio_actual: '',
    precio_habitual: '',
    gastos_envio: '',
    titulo: '',
    descripcion: '',
    imagen: '',
    fecha: '',
    votos: 0,
    voteUp() {},
    voteDown() {}
  };

  constructor(private apiService: ApiService, private router: Router) {
    moment.locale('es');
    this.offerData.fecha = moment().format('LLL');
  }

  private uniqueID() {    const thisMS: number = Date.now();
                          const shake = Math.random();
                          let unique: string = Math.pow(thisMS, shake).toString();
                          unique = unique.toString().replace('.', thisMS.toString());
                          return unique; }

  ngOnInit() {
  }


  addOffer() {
    this.offer = Object.assign({}, this.offerData);
    this.apiService.addOffer$(this.offer)
      .subscribe(res => {
        const id = res.id;
        this.router.navigate(['/oferta', id]);
      },
      (err) => {console.log(err); });
  }

}
