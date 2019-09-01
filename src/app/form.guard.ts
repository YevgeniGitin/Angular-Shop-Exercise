import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate <ProductFormComponent> {
  canDeactivate(component: ProductFormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | import('rxjs').Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   if(component.contactForm.dirty){
   return confirm('Are you sure?');
   }else{
     return true;
   }

  }
  
  
}
