import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate} from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<ProductFormComponent> {
  
  canDeactivate(component: ProductFormComponent): boolean
{
    if (component.contactForm.dirty) {
      return confirm('Are you sure?');
    } else {
      return true;
    }
  }
}
