import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import {MatTableModule} from '@angular/material/table'; 
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [FormComponent, ImageuploadComponent],
  imports: [
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
    FormRoutingModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
