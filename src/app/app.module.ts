import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContentProjectionLinkComponent } from './components/content-projection-link/content-projection-link.component';
import { LogInFormComponent } from './components/log-in-form/log-in-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { TranslationPipe } from './pipes/translation.pipe';
import { ConfirmationDirective } from './directives/confirmation.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    ProductDisplayComponent,
    SocialLinksComponent,
    CategoriesListComponent,
    ProductsListComponent,
    ProductCardComponent,
    HomeComponent,
    AboutComponent,
    ContentProjectionLinkComponent,
    LogInFormComponent,
    ProductFormComponent,
    ContactFormComponent,
    TranslationPipe,
    ConfirmationDirective,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
