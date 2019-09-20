import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        ProductsRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        CommonModule
    ],
    providers: [
        DataService
     ],
    declarations: [
        ProductFormComponent,
        CategoriesListComponent
    ],
})
export class ProductsModule { }