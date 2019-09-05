import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { LogInGuard } from './log-in.guard';
import { FormGuard } from './form.guard';
import { IsAdminGuard } from './is-admin.guard';



const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'category-list',component: CategoriesListComponent},
  {path: 'logIn', component: LogInFormComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: 'products-list/:selectedCategory', component: ProductsListComponent},
  {path: 'product-details/:id', component: ProductDisplayComponent,data:{action:true}},
  {path: 'add-new-products', component: ProductFormComponent,canActivate:[IsAdminGuard],canDeactivate:[FormGuard]},
  {path: 'edit-product/:id' ,component: ProductFormComponent,canActivate:[IsAdminGuard],canDeactivate:[FormGuard]},
  {path: 'cart',
  component: ProductsListComponent,
  canActivate:[LogInGuard],
  children:[{path:'product-details/:id',component:ProductDisplayComponent,data:{action:false}}]},
  {path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
