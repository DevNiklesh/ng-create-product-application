import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditProductComponent } from './create-edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CreateEditProductRoutingModule } from './create-edit-product-routing.module';

@NgModule({
  declarations: [CreateEditProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    CreateEditProductRoutingModule,
  ],
})
export class CreateEditProductModule {}
