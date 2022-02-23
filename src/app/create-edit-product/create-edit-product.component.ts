import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categories } from '../core/constants/category.constant';
import { Product } from '../core/models/product.model';
import { StorageService } from '../core/services/storage.service';

@Component({
  selector: 'app-create-edit-product',
  templateUrl: './create-edit-product.component.html',
  styleUrls: ['./create-edit-product.component.scss'],
})
export class CreateEditProductComponent implements OnInit {
  mode: 'New' | 'Edit' = 'New';
  productForm!: FormGroup;
  submitted = false;
  allCategories = Categories;
  productIndex: number = -1;

  // convenience getter for easy access to form fields
  get f() {
    return this.productForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((res) => {
      this.productIndex = parseInt(res.get('idx') || '-1');
      if (this.productIndex > -1) {
        this.mode = 'Edit';
        this.initializeForm(
          this.storageService.getProductByIndex(this.productIndex)
        );
      }
    });
  }

  initializeForm(product?: Product) {
    this.productForm = this.fb.group({
      name: [
        product?.name || '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z]+$/),
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      category: [product?.category || '', Validators.required],
      quantity: [product?.quantity || 1, Validators.required],
      currency: [product?.currency || '', Validators.required],
      price: [product?.price || 0, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }

    const data: Product = {
      name: this.productForm.value.name,
      category: this.productForm.value.category,
      quantity: this.productForm.value.quantity,
      price: this.productForm.value.price,
      currency: this.productForm.value.currency,
    };

    if (this.mode === 'New') {
      // save form values on success
      this.storageService.addProduct(data);
      this.toastr.success('New Product Added 🎉');
    } else {
      // update product values on success
      this.storageService.updateProduct(this.productIndex, data);
      this.toastr.success('Product Updated 🎉');
    }

    this.goToList();
  }

  goToList() {
    this.router.navigateByUrl('/list');
  }
}
