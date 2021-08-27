import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';
import {
  MatIconModule
} from '@angular/material/icon';

const material= [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
  
]; 


@NgModule({
  
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
