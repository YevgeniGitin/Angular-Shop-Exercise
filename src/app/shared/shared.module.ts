import { NgModule } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { CommonModule } from '@angular/common';
import { ConfirmationDirective } from './directives/confirmation.directive';
import { TranslationPipe } from './pipes/translation.pipe';
import { CartService } from './services/cart.service';

@NgModule({
    providers: [
        CartService 
     ],
    imports:[
        CommonModule,
    ],
    declarations: [
        ProductCardComponent,
        ProductDisplayComponent,
        ConfirmationDirective,
        TranslationPipe
    ],
    exports: [
        ProductCardComponent,
        ProductDisplayComponent,
        ConfirmationDirective,
        TranslationPipe
    ]
})
export class SharedModule {
}
