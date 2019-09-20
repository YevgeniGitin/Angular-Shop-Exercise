import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { ProductsListComponent } from '../components/products-list/products-list.component';
// import { ProductDisplayComponent } from '../components/product-display/product-display.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { IsAdminGuard } from '../core/guards/is-admin.guard';
import { FormGuard } from '../core/guards/form.guard';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDisplayComponent } from '../shared/components/product-display/product-display.component';

const routes: Routes = [
    {path: 'category-list', component: CategoriesListComponent},
    {path: 'products-list/:selectedCategory', component: ProductsListComponent },
    {path: 'product-details/:id', component: ProductDisplayComponent, data: { action: true }},
    {path: 'add-new-products', component: ProductFormComponent, canActivate: [IsAdminGuard], canDeactivate: [FormGuard]},
    {path: 'edit-product/:id', component: ProductFormComponent, canActivate: [IsAdminGuard], canDeactivate: [FormGuard]}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductsRoutingModule {}