import { Component, OnInit, Input,  OnChanges, Output, EventEmitter } from "@angular/core";
import { DataService } from "../data.service";
import { Category } from "../../modules/category";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { Product } from "src/modules/product";
import { __importDefault } from 'tslib';

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnInit,  OnChanges {
  @Input() selectedProduct:Product;
  @Output() backEdit = new EventEmitter<void>();
  newProduct:boolean=true;
  contactForm: FormGroup;
  categorys: Category[] = this.dataService.loadCategorys();
  constructor(private dataService: DataService, private fb: FormBuilder) { 
    this.contactForm = this.fb.group({
      Category: [this.categorys[0], Validators.required],
      Image: ["", Validators.required],
      Title: ["", Validators.required],
      Price: ["", [Validators.required, Validators.min(0)]],
      Description: [""],
    });
   }

   get imageForm():AbstractControl{
    return this.contactForm.get('Image');
   }

   get titleForm():AbstractControl{
    return this.contactForm.get('Title');
   }

   get priceForm():AbstractControl{
    return this.contactForm.get('Price');
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
    if(this.newProduct){
    this.dataService.addProduct(product);
    alert("The product added!");
    this.contactForm.reset();
    this.contactForm.patchValue({Category:this.categorys[0],});
    }else{
      this.dataService.deleteProduct(this.selectedProduct);
      this.dataService.addProduct(product);
      this.backEdit.emit();
    }
  }
  ngOnChanges(){
    let indexCategory:number=this.categorys.findIndex(o=>o.id===this.selectedProduct.CategoryId);
    this.newProduct=false;
    this.contactForm.patchValue({
      Category: this.categorys[indexCategory], 
      Image: this.selectedProduct.Image,
      Title: this.selectedProduct.Title,
      Price: this.selectedProduct.Price,
      Description: this.selectedProduct.Description,
    });

  }
  ngOnInit() {  }
}
