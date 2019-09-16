import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContentProjectionLinkComponent } from './components/content-projection-link/content-projection-link.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerInterceptor } from './logger.interceptor';
import { LogInModule } from './logIn/logIn.module';
import { ProductsModule } from './products/products.module';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { TranslationPipe } from './pipes/translation.pipe';
import { ConfirmationDirective } from './directives/confirmation.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    SocialLinksComponent,
    HomeComponent,
    AboutComponent,
    ContentProjectionLinkComponent,
    ContactFormComponent,
    NotFoundComponent,
    TranslationPipe,
    ConfirmationDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ProductsModule,
    CoreModule,
    LogInModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
