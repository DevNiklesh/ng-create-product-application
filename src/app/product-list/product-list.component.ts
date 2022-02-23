import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../core/models/product.model';
import { StorageService } from '../core/services/storage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  allProducts: Product[];

  constructor(
    private storageService: StorageService,
    private toastr: ToastrService
  ) {
    this.allProducts = this.storageService.getProducts();
  }

  ngOnInit(): void {}

  deleteProduct(idx: number) {
    this.allProducts = this.storageService.deleteProduct(idx);
    this.toastr.success('Product Deleted!');
  }
}
