import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { OfferComponent } from './offers/offer/offer.component';
import { OfferListComponent } from './offers/offer-list/offer-list.component';
import { OfferAddComponent } from './offers/offer-add/offer-add.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user/user.component';

import { AuthGuard } from './shared/guards/auth.guard';
import { OfferEditComponent } from './offers/offer-edit/offer-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ofertas', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'ofertas',
    component: OfferListComponent
  },
  {
    path: 'oferta/:id',
    component: OfferComponent
  },
  {
    path: 'editar-oferta/:id',
    component: OfferEditComponent
  },
  {
    path: 'nueva-oferta',
    component: OfferAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    component: UserListComponent
  },
  {
    path: 'usuario/:id',
    component: UserComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
