import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users;

  data: any;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.apiService.getUsers$().subscribe(e => this.users = e);
  }

  deleteUser(id) {
    this.apiService.deleteUser$(id).subscribe(data => {
      this.data = data;
      this.getUsers();
    });
  }

}
