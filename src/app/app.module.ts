import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MenuBarComponent } from "./menu-bar/menu-bar.component";
import { MainAreaComponent } from "./main-area/main-area.component";
import { ProductDisplayComponent } from "./product-display/product-display.component";
import { SocialLinksComponent } from "./social-links/social-links.component";
import { CategorysListComponent } from "./categorys-list/categorys-list.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContentProjectionLinkComponent } from './content-projection-link/content-projection-link.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    MainAreaComponent,
    ProductDisplayComponent,
    SocialLinksComponent,
    CategorysListComponent,
    ProductsListComponent,
    ProductCardComponent,
    HomeComponent,
    AboutComponent,
    ContentProjectionLinkComponent,
    ShoppingCardComponent,
    LogInFormComponent,
    ProductFormComponent,
    ContactFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
