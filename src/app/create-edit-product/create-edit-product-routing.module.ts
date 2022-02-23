import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEditProductComponent } from './create-edit-product.component';


const routes: Routes = [
  {
    path: '',
    component: CreateEditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEditProductRoutingModule { }
