import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/classes/user';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public user: User;

  public userData: User = {
    id: this.uniqueID(),
    usuario: '',
    email: '',
    password: '',
    fecha: ''
  };

  constructor(private apiService: ApiService, private router: Router) {
    moment.locale('es');
    this.userData.fecha = moment().format('LLL');
  }

  private uniqueID() {    const thisMS: number = Date.now();
                          const shake = Math.random();
                          let unique: string = Math.pow(thisMS, shake).toString();
                          unique = unique.toString().replace('.', thisMS.toString());
                          return unique;
  }

  ngOnInit() {
  }

  addUser() {
    this.user = Object.assign({}, this.userData);
    this.apiService.addUser$(this.user)
      .subscribe(res => {
        const id = res.id;
        //this.router.navigate(['/usuario', id]);
        this.router.navigate(['/usuarios']);
      },
      (err) => {console.log(err); });
  }

}
