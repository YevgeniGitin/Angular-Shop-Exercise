import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product';
import { DataService } from '../../services/data.service';
import { CartService } from '../../../shared/services/cart.service';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  constructor( private dataService: DataService, private cartService: CartService, private userService: UserService, private route: ActivatedRoute, private router: Router) { 
  }
  productsArray: Observable<Product[]>; //products array
  //display the product
  clickOnProduct(product: Product) {
      this.router.navigate(['product-details', product.productId]);
  }
  // click on edit button and sweech the flag and send the selected product
  editProduct(product: Product) {
    this.router.navigate(['edit-product', product.productId]);
  }
  //get selected list of products
  ngOnInit() {
    const selectedCategory: string = this.route.snapshot.paramMap.get('selectedCategory');
    if (selectedCategory === 'allProducts') {
      this.productsArray = this.dataService.products;
    } else {
      this.productsArray = this.dataService.loadCategoryProdacts(selectedCategory);
    }
  }
}
