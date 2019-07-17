import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { CommonsModule } from '../commons/commons.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserComponent,
    RegisterComponent,
    LoginComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    CommonsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class UserModule { }
