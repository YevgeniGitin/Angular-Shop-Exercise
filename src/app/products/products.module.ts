import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { ProductDisplayComponent } from '../components/product-display/product-display.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';

@NgModule({
    imports: [
        ProductsRoutingModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [
        DataService 
     ],
    declarations: [
        ProductCardComponent,
        ProductDisplayComponent,
        ProductsListComponent,
        ProductFormComponent,
        CategoriesListComponent
    ],
})
export class ProductsModule { }