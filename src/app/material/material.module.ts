import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatPaginatorModule
  } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatGridListModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatGridListModule,
    MatPaginatorModule
  ],
  declarations: []
})
export class MaterialModule { }
