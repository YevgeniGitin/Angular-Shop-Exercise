import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CommonModule } from '@angular/common';
import { ConfirmationDirective } from './directives/confirmation.directive';
import { TranslationPipe } from './pipes/translation.pipe';
import { CartRoutingModule } from '../cart/cart-routing.module';
import { CartService } from './services/cart.service';

@NgModule({
    providers: [
        CartService 
     ],
    imports:[
        CommonModule,
        CartRoutingModule
    ],
    declarations: [
        ProductCardComponent,
        ProductDisplayComponent,
        ProductsListComponent,
        ConfirmationDirective,
        TranslationPipe
    ],
    exports: [
        ProductCardComponent,
        ProductDisplayComponent,
        ProductsListComponent,
        ConfirmationDirective,
        TranslationPipe
    ]
})
export class SharedModule {
}
