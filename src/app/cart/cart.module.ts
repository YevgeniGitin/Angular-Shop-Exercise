import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartService } from './services/cart.service';

@NgModule({
    imports: [
        CartRoutingModule,
        SharedModule,
        CommonModule
    ],
    // providers: [
    //     CartService 
    //  ]
})
export class CartModule { }