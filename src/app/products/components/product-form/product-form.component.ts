import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Category } from '../../../core/models/category';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Product } from 'src/app/core/models/product';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  selectedProduct: Product; //get product if we come from the edit function
  newProduct: boolean = true; //flag if we add new item or edit item
  contactForm: FormGroup;
  categories: Category[]; //load Categories
  categoriesPromise: Promise<Category[]>;
  isSubmit: boolean = false;

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location
  ) {
    //
    this.categoriesPromise = this.dataService.getCategoriesPromise();
    this.contactForm = this.fb.group({
      Category: [, Validators.required],
      Image: ['', Validators.required],
      Title: ['', Validators.required],
      Price: ['', [Validators.required, Validators.min(0)]],
      Description: ['']
    });
  }

  get imageForm(): AbstractControl {
    return this.contactForm.get('Image');
  }

  get categoryForm(): AbstractControl {
    return this.contactForm.get('Category');
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
      productId: this.createId(),
      categoryId: formModel.Category.id,
      description: formModel.Description,
      image: formModel.Image,
      price: formModel.Price,
      title: formModel.Title
    };
    this.isSubmit = true;
    if (this.newProduct) {
      //add new prodact
      this.dataService.addProduct(product);
      alert('The product added!');
      this.contactForm.reset(); //reset the form for new details of new  product
      this.contactForm.patchValue({ Category: this.categories[0] });
    } else {
      //edit product
      product.productId = this.selectedProduct.productId;
      if (this.selectedProduct !== product) {
        //if was chenge
        this.dataService.deleteProduct(this.selectedProduct); //delete old product
        this.dataService.addProduct(product); //add new product
        this.userService.updateProductsInCardAfterEdit(
          this.selectedProduct,
          product
        ); //update users cards
        this.location.back();
      }
    }
  }

  createId(): string {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    let id: string = Math.random()
      .toString(36)
      .substr(2, 22);
    while (this.dataService.getProductByid(id) !== undefined) {
      id = Math.random()
        .toString(36)
        .substr(2, 22);
    }
    return id;
  }

  ngOnInit() {
    this.categoriesPromise.then(c => {//do after data loaded 
      const id = this.route.snapshot.paramMap.get('id');
      this.categories = c;
      if (id !== null) {
        this.selectedProduct = this.dataService.getProductByid(id);
        let indexCategory: number = this.categories.findIndex(
          o => o.id === this.selectedProduct.categoryId
        ); //in for category name to display
        this.newProduct = false; //the submit function know that it is edit and not add new product
        this.contactForm.patchValue({
          Category: this.categories[indexCategory],
          Image: this.selectedProduct.image,
          Title: this.selectedProduct.title,
          Price: this.selectedProduct.price,
          Description: this.selectedProduct.description
        });
      } else {
        this.contactForm.patchValue({
          Category: this.categories[0]
        });
      }
    });
  }
}
