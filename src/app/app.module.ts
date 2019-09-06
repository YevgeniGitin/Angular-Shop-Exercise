import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContentProjectionLinkComponent } from './content-projection-link/content-projection-link.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TranslationPipe } from './translation.pipe';
import { ConfirmationDirective } from './confirmation.directive';
import { NotFoundComponent } from './not-found/not-found.component';
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
