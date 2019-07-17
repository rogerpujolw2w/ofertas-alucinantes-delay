import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/shared/classes/offer';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.scss']
})
export class OfferEditComponent implements OnInit {

  public offer: Offer;
  public identifier: any;

  isLoadingResults = false;

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

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    moment.locale('es');
    this.offerData.fecha = moment().format('LLL');
  }

  private uniqueID() {    const thisMS: number = Date.now();
                          const shake = Math.random();
                          let unique: string = Math.pow(thisMS, shake).toString();
                          unique = unique.toString().replace('.', thisMS.toString());
                          return unique; }

  ngOnInit() {
    this.route.params.subscribe(miParams => {this.identifier = miParams.id; });
    this.apiService.getOffer$(this.identifier).subscribe(e => {
      this.offerData = e;
      console.log(e);
    });
  }

  editOffer() {
    this.offer = Object.assign({}, this.offerData);
    this.apiService.editOffer$(this.offerData.id, this.offer)
      .subscribe(res => {
        const id = res.id;
        this.router.navigate(['/oferta', id]);
      },
      (err) => {console.log(err); });
  }

}
