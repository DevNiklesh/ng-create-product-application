import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  prodKey = 'PRODUCTS';
  constructor() {}

  saveProducts(data: Product[]) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(this.prodKey, jsonData);
  }

  getProducts(): Product[] {
    let data = localStorage.getItem(this.prodKey);
    return JSON.parse(data || '[]');
  }

  getProductByIndex(idx: number): Product {
    return this.getProducts()[idx];
  }

  addProduct(product: Product): Product[] {
    let allProducts = this.getProducts();
    allProducts.push(product);
    this.saveProducts(allProducts);
    return allProducts;
  }

  updateProduct(idx: number, product: Product): Product[] {
    let allProducts = this.getProducts();
    allProducts[idx] = product;
    this.saveProducts(allProducts);
    return allProducts;
  }

  deleteProduct(idx: number): Product[] {
    let allProducts = this.getProducts();
    allProducts.splice(idx, 1);
    this.saveProducts(allProducts);
    return allProducts;
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }
}
