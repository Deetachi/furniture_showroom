import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatListModule,
  MatPaginatorModule,
  MatIconModule,
  MatSidenavModule
} from '@angular/material';
import { ServicesComponent } from './services/services.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurniturePriceComponent } from './furniture-price/furniture-price.component';

const routes: Routes = [
  {
  path: '',
  component: HomePageComponent
  }
];

@NgModule({
  declarations: [HomePageComponent, ServicesComponent,
    AdvertisementComponent,
    FurnitureDetailsComponent,
    FurniturePriceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    MatMenuModule,
    MatPaginatorModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [HomePageComponent, ServicesComponent,
    AdvertisementComponent,
    FurnitureDetailsComponent,
    FurniturePriceComponent]
})
export class HomePageModule { }
