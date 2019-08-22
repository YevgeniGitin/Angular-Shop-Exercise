import { Injectable } from "@angular/core";
import productsCategorys from "../assets/data/ProductCategory.json";
import{Category} from "../modules/category";
import {Product} from"../modules/product";


@Injectable({
  providedIn: 'root'
})
export class DataService {
 private data:Category[]=productsCategorys;

  constructor() { }
//load all categorys
  loadCategorys():Category[]{
    return this.data;
  }
  
  addProduct(product:Product){
    let categoryIndex=this.data.findIndex(o=>o.id===product.CategoryId);
    this.data[categoryIndex].productarr.push(product);
  }

  deleteProduct(product:Product){
    let categoryIndex=this.data.findIndex(o=>o.id===product.CategoryId);
    let productIndex= this.data[categoryIndex].productarr.findIndex(o=>o===product)
    this.data[categoryIndex].productarr.splice(productIndex, 1);
  }

  loadCategoryProdacts(id:string):Product[]{
    let category:Category=this.data.find(o => o.id === id);
    return category.productarr;
  }

  loadAllProducts():Product[] {
    let products: Product[] = new Array();
    for(let category of this.data){
      for(let item of category.productarr){
        products.push(item);
      }
    }
    return products;
  }







}
