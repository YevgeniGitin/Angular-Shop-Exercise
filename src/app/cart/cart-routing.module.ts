import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from '../shared/components/products-list/products-list.component';
import { LogInGuard } from '../core/guards/log-in.guard';
import { ProductDisplayComponent } from '../shared/components/product-display/product-display.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: 'cart', component: ProductsListComponent,
      canActivate: [LogInGuard],
      children: [
        {path: 'product-details/:id', component: ProductDisplayComponent, data: { action: false }}
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CartRoutingModule {}