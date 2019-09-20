import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartListComponent } from './components/cart-list/cart-list.component';
@NgModule({
    imports: [
        CartRoutingModule,
        SharedModule,
        CommonModule
    ],
    declarations:[CartListComponent]
})
export class CartModule { }