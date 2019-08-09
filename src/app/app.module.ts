import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { CategorysListComponent } from './categorys-list/categorys-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
