import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  constructor( private cartService: CartService, private userService: UserService, private router: Router) { 
  }
  productsArray: Observable<Product[]>; //products array
  //display the product
  clickOnProduct(product: Product) {
      this.router.navigate(['cart/product-details', product.productId]);
  }
  //get selected list of products
  ngOnInit() {
      this.productsArray = this.cartService.cart;
  }

}
