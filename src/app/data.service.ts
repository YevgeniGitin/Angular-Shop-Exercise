import { Injectable } from '@angular/core';
import productsCategories from '../assets/data/ProductCategory.json';
import { Category } from '../modules/category';
import { Product } from '../modules/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: Category[] = productsCategories;

  constructor() {}

  getProductByid(id: string): Product {
    let products: Product[] = this.loadAllProducts();
    return products.find(item => item.productId === id);
  }

  //load all Categories
  loadCategories(): Category[] {
    return this.data;
  }
  //add product to the data
  addProduct(product: Product) {
    let categoryIndex = this.data.findIndex(o => o.id === product.categoryId);
    this.data[categoryIndex].productArr.push(product);
  }
  //delete product from the data
  deleteProduct(product: Product) {
    let categoryIndex = this.data.findIndex(o => o.id === product.categoryId);
    let productIndex = this.data[categoryIndex].productArr.findIndex(
      o => o === product
    );
    this.data[categoryIndex].productArr.splice(productIndex, 1);
  }
  //load products of one category
  loadCategoryProdacts(id: string): Product[] {
    let category: Category = this.data.find(o => o.id === id);
    return category.productArr;
  }
  //load all products
  loadAllProducts(): Product[] {
    let products: Product[] = new Array();
    for (let category of this.data) {
      for (let item of category.productArr) {
        products.push(item);
      }
    }
    return products;
  }
}
