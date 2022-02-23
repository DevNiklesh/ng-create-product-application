import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list',
  loadChildren: () =>
    import('./product-list/product-list.module').then(
      (m) => m.ProductListModule
    ),
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./create-edit-product/create-edit-product.module').then(
        (m) => m.CreateEditProductModule
      ),
  },
  {
    path: 'edit/:idx',
    loadChildren: () =>
      import('./create-edit-product/create-edit-product.module').then(
        (m) => m.CreateEditProductModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
