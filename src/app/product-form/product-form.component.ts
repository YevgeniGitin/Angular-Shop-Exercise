import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Category } from '../../modules/category';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { Product } from 'src/modules/product';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import{ Location } from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  selectedProduct: Product; //get product if we come from the edit function
  newProduct: boolean = true; //flag if we add new item or edit item
  contactForm: FormGroup;
  Categories: Category[] = this.dataService.loadCategories(); //load Categories

  constructor( private dataService: DataService,private userService: UserService,private fb: FormBuilder,private route: ActivatedRoute, private location : Location) {
    this.contactForm = this.fb.group({
      Category: [this.Categories[0], Validators.required],
      Image: ['', Validators.required],
      Title: ['', Validators.required],
      Price: ['', [Validators.required, Validators.min(0)]],
      Description: ['']
    });
  }

  get imageForm(): AbstractControl {
    return this.contactForm.get('Image');
  }

  get titleForm(): AbstractControl {
    return this.contactForm.get('Title');
  }

  get priceForm(): AbstractControl {
    return this.contactForm.get('Price');
  }

  onSubmit() {
    const formModel = this.contactForm.value;
    let product: Product = {
      ProductId: this.createId(),
      CategoryId: formModel.Category.id,
      Description: formModel.Description,
      Image: formModel.Image,
      Price: formModel.Price,
      Title: formModel.Title
    };
    if (this.newProduct) {
      //add new prodact
      this.dataService.addProduct(product);
      alert('The product added!');
      this.contactForm.reset(); //reset the form for new details of new  product
      this.contactForm.patchValue({ Category: this.Categories[0] });
    } else {
      //edit product
      product.ProductId=this.selectedProduct.ProductId;
      if (this.selectedProduct !== product) {
        //if was chenge
        this.dataService.deleteProduct(this.selectedProduct); //delete old product
        this.dataService.addProduct(product); //add new product
        this.userService.updateProductsInCardAfterEdit(this.selectedProduct, product); //update users cards
        this.location.back();
      }
    }
  }

  createId():string {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
     let id:string=Math.random().toString(36).substr(2, 22);
     while(this.dataService.getProductByid(id)!==undefined){
      id=Math.random().toString(36).substr(2, 22);
     }
     return id;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.newProduct
      this.selectedProduct = this.dataService.getProductByid(id);
      let indexCategory: number = this.Categories.findIndex(
        o => o.id === this.selectedProduct.CategoryId
      ); //in for category name to display
      this.newProduct = false; //the submit function know that it is edit and not add new product
      this.contactForm.patchValue({
        Category: this.Categories[indexCategory],
        Image: this.selectedProduct.Image,
        Title: this.selectedProduct.Title,
        Price: this.selectedProduct.Price,
        Description: this.selectedProduct.Description
      });
    }
  }
}
