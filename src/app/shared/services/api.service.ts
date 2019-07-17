import { Injectable } from '@angular/core';
import { Offer } from '../classes/offer';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = environment.API_URL;

  constructor(private http: HttpClient) { }

  // Offers

  getOffers$() {
    return this.http.get<Offer[]>(this.apiURL + 'offers');
  }

  getOffer$(id: string) {
    return this.http.get<Offer>(this.apiURL + `offers/${id}`);
  }

  addOffer$(offer: Offer) {
    return this.http.post<Offer>(this.apiURL + 'offers', offer)
      .pipe(tap((offer: Offer) => console.log(`added offer: id=${offer.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }

  deleteOffer$(id: string) {
    return this.http.delete(this.apiURL + `offers/${id}`);
  }

  editOffer$(id: string, offer: Offer) {
    return this.http.put<Offer>(this.apiURL + `offers/${id}`, offer)
      .pipe(tap((offer: Offer) => console.log(`edited offer: id=${offer.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }

  // Users

  getUsers$() {
    return this.http.get<User[]>(this.apiURL + 'users');
  }

  getUser$(id: string) {
    return this.http.get<User>(this.apiURL + `users/${id}`);
  }

  addUser$(user: User) {
    return this.http.post<User>(this.apiURL + 'users', user)
      .pipe(tap((user: User) => console.log(`added user: id=${user.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }

  deleteUser$(id: string) {
    return this.http.delete(this.apiURL + `users/${id}`);
  }

  editUser$(id: string, user: User) {
    return this.http.put<User>(this.apiURL + `users/${id}`, user)
      .pipe(tap((member: User) => console.log(`edited member: id=${member.id}`)),
            catchError(error => {console.log(error);
                                 return throwError(error); }));
  }

}
