import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';
import { Product } from '../../modules/product';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import{ Location } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void',style({ opacity: 0 })),
      transition('void <=> *', animate('1s'))
    ])
  ]
})
export class ProductDisplayComponent implements OnInit{
  product: Product; //get the product to show
  action:boolean=this.route.snapshot.data['action'];

  constructor(private cartService:CartService,private router: Router,private userService:UserService,private route: ActivatedRoute, private dataService:DataService, private location : Location ) {}

  addItem(product:Product){
    this.cartService.addProduct(product);
    alert('The product added to the card');
  }
//remove product from the cart
  removeItem(product){
    this.cartService.removeFromCard(product);
    this.router.navigate(['/cart']);//after the removing go back to the cart list
  }
//back button
  goBack() {
    this.location.back();
  }
  close(){
    this.router.navigate(['/cart']);
  }
  //get the id of the product and listeniing for any change
  ngOnInit() {
    this.route.paramMap.subscribe(id=>this.loadeProduct(id.get('id')));
  }

  loadeProduct(id:string){
    this.product=this.dataService.getProductByid(id);
  }
}