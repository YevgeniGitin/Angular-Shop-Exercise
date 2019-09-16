import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { LogInGuard } from './core/guards/log-in.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactFormComponent },
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
