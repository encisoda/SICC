import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule]
})

export class MaterialModule{}
