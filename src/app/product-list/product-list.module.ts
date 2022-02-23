import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ToastrModule } from 'ngx-toastr';
import { ProductListRoutingModule } from './product-list-routing.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, ToastrModule, ProductListRoutingModule],
})
export class ProductListModule {}
