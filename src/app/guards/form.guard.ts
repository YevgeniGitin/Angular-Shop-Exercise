import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import { ProductFormComponent } from '../components/product-form/product-form.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<ProductFormComponent> {
  
  canDeactivate(component: ProductFormComponent): boolean
{
    if (component.contactForm.dirty) {//check if the form is dirty
      if(component.isSubmit){//check if it is submit action if yes do not ask
        component.isSubmit=false;//change the flag to init for next use
        return true;
      }else{
        return confirm('Are you sure you whant to leave?');
      }
    } else {
      return true;
    }
  }
}
