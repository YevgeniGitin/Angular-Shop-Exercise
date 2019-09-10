import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { LogInGuard } from './guards/log-in.guard';
import { FormGuard } from './guards/form.guard';
import { IsAdminGuard } from './guards/is-admin.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'category-list', component: CategoriesListComponent},
  {path: 'logIn', component: LogInFormComponent },
  {path: 'contact', component: ContactFormComponent },
  {path: 'products-list/:selectedCategory', component: ProductsListComponent },
  {path: 'product-details/:id', component: ProductDisplayComponent, data: { action: true }},
  {path: 'add-new-products', component: ProductFormComponent, canActivate: [IsAdminGuard], canDeactivate: [FormGuard]},
  {path: 'edit-product/:id', component: ProductFormComponent, canActivate: [IsAdminGuard], canDeactivate: [FormGuard]},
  {path: 'cart', component: ProductsListComponent,
 canActivate: [LogInGuard],
    children: [
      {path: 'product-details/:id', component: ProductDisplayComponent, data: { action: false }}
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
