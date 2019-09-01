import { Component, OnInit } from '@angular/core';
import{ trigger , state , style , animate , transition } from '@angular/animations';
import {Product} from '../../modules/product';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  animations:[trigger('fadeInOut', [
    state('void', style({opacity: 0})),
    transition('void => *', animate('1s')),
  ])]
})
export class ProductsListComponent implements OnInit {
  constructor(private dataService: DataService,private cartService:CartService, private userService:UserService, private route: ActivatedRoute, private router: Router) {}
  action:boolean; //what action to allow add or remove
  productsArray: Product[];//products array
  //display the product
  clickOnProduct(product:Product) {
    if(this.action===true){//check if we in get in from product list or from the card
      this.router.navigate(['product-details',product.ProductId]);
    }else{
      this.router.navigate(['cart/product-details',product.ProductId]);
    }
    
  }
  // click on edit button and sweech the flag and send the selected product
  editProduct(product:Product){
    this.router.navigate(['edit-product',product.ProductId]);
   }
  //get selected list of products
  ngOnInit() {
    const selectedCategory:string = this.route.snapshot.paramMap.get('selectedCategory');
    if(selectedCategory==='allProducts'){
      this.action=true;
      this.productsArray=this.dataService.loadAllProducts();
    }else if(selectedCategory===null){//if it is shoping card list
      this.action=false;
      this.productsArray=this.cartService.loadcard();
    }else{
      this.action=true;
      this.productsArray=this.dataService.loadCategoryProdacts(selectedCategory);
    }
  }
}
