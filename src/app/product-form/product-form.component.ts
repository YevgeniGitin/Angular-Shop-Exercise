import { Component, OnInit, Input, OnChanges, Output, EventEmitter} from "@angular/core";
import { DataService } from "../data.service";
import { Category } from "../../modules/category";
import {FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import { Product } from "src/modules/product";
import { UserService } from "../user.service";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() selectedProduct: Product; //get product if we come from the edit function
  @Output() backEdit = new EventEmitter<void>();//after edit we want to go back to the list
  newProduct: boolean = true; //flag if we add new item or edit item
  contactForm: FormGroup;
  categorys: Category[] = this.dataService.loadCategorys();//load categorys 

  constructor( private dataService: DataService, private userService: UserService, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      Category: [this.categorys[0], Validators.required],
      Image: ["", Validators.required],
      Title: ["", Validators.required],
      Price: ["", [Validators.required, Validators.min(0)]],
      Description: [""]
    });
  }

  get imageForm(): AbstractControl {
    return this.contactForm.get("Image");
  }

  get titleForm(): AbstractControl {
    return this.contactForm.get("Title");
  }

  get priceForm(): AbstractControl {
    return this.contactForm.get("Price");
  }

  onSubmit() {
    const formModel = this.contactForm.value;
    let product: Product = {
      CategoryId: formModel.Category.id,
      Description: formModel.Description,
      Image: formModel.Image,
      Price: formModel.Price,
      Title: formModel.Title
    };
    if (this.newProduct) {//add new prodact
      this.dataService.addProduct(product);
      alert("The product added!");
      this.contactForm.reset();//reset the form for new details of new  product
      this.contactForm.patchValue({ Category: this.categorys[0] });
    } else {//edit product
      if (this.selectedProduct !== product) {//if was chenge
        this.dataService.deleteProduct(this.selectedProduct);//delete old product
        this.dataService.addProduct(product); //add new product
        this.userService.updateProductsInCardAfterEdit(this.selectedProduct,product);//update users cards
        this.backEdit.emit();
      }
    }
  }
  //if was change it says that we come from edit function and we display the products details in the form 
  ngOnChanges() {
    let indexCategory: number = this.categorys.findIndex(o => o.id === this.selectedProduct.CategoryId); //in for category name to display
    this.newProduct = false;//the submit function know that it is edit and not add new product
    this.contactForm.patchValue({
      Category: this.categorys[indexCategory],
      Image: this.selectedProduct.Image,
      Title: this.selectedProduct.Title,
      Price: this.selectedProduct.Price,
      Description: this.selectedProduct.Description
    });
  }
  ngOnInit() {}
}
