import { Routes, RouterModule } from '@angular/router';
import { LogInGuard } from '../core/guards/log-in.guard';
import { ProductDisplayComponent } from '../shared/components/product-display/product-display.component';
import { NgModule } from '@angular/core';
import { CartListComponent } from './components/cart-list/cart-list.component';

const routes: Routes = [
    {path: '', component: CartListComponent,
      canActivate: [LogInGuard],
      children: [
        {path: 'product-details/:id', component: ProductDisplayComponent, data: { action: false }, pathMatch:'full'}
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CartRoutingModule {}