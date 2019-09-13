import { Injectable } from '@angular/core';
import { Category } from '../../modules/category';
import { Product } from '../../modules/product';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _entries = new BehaviorSubject<Category[]>([]);
  private _productBehaviorSubject = new BehaviorSubject<Product[]>([]);
  readonly products=this._productBehaviorSubject.asObservable();
  readonly entries = this._entries.asObservable();
  private allProducts:Product[];
  private _data: Category[];
  private url:string='../assets/data/ProductCategory.json';
  private categoriesPromise: Promise<Category[]>;

  constructor(private http: HttpClient) {
    this.categoriesPromise=this.loadInitialData();
    this.categoriesPromise.then((json)=>{
      this._entries.next(json);
      this._data=json;
      this.allProducts=this.getAllProducts();
      this._productBehaviorSubject.next( this.allProducts);
    });
  }

  get data(): Category[]{
    return this._data;
  }
//load data from json file and update the data array and the behavior subject
  private loadInitialData(): Promise<Category[]>{
    return this.getData()
    .toPromise()
    .catch(this.handleError);
  }

  private getData():Observable<Category[]>{
    return this.http.get(this.url)
      .pipe(map(json => json as Category[]));
  }

  getCategoriesPromise(){
    return this.categoriesPromise;
  }

  private handleError(error: Response) {
    console.error(error);
    const msg = `Error status code ${error.status} at ${error.url}`;
    return Promise.reject(msg || error);
    }

  getProductByidObservable(id: string): Observable<Product> {
    return this.products.pipe(
      map(o=>o.find(p=>p.productId===id))
    );
  }

  getProductByid(id: string): Product {
    return this.allProducts.find(item => item.productId === id);
  }
  //add product to the data and to the products list and updates the behavior subjects
  addProduct(product: Product)  {
    let categoryIndex = this.data.findIndex(o => o.id === product.categoryId);
    this.data[categoryIndex].productArr.push(product);
    let index = this.allProducts.findIndex(o => o.categoryId === product.categoryId);
    this.allProducts.splice(index,0,product);
    this._entries.next(this.data);
    this._productBehaviorSubject.next(this.allProducts);
  }
  //delete product from the data and from products list and updates the behavior subjects
  deleteProduct(product: Product) {
    let categoryIndex = this.data.findIndex(o => o.id === product.categoryId);
    let productIndex = this.data[categoryIndex].productArr.findIndex(o => o === product);
    this.data[categoryIndex].productArr.splice(productIndex, 1);
    productIndex = this.allProducts.findIndex(o => o === product);
    this.allProducts.splice(productIndex, 1);
    this._entries.next(this.data);
    this._productBehaviorSubject.next(this.allProducts);
  }
  //load products of one category
  loadCategoryProdacts(id: string): Observable<Product[]> {
    return this.products.pipe(
      map(o=>o.filter(p=>p.categoryId===id))
    );
  }
//local function for the service to load all products to the array
  private getAllProducts(): Product[]{
    let products: Product[] = new Array();
    for (let category of this.data) {
      for (let item of category.productArr) {
        products.push(item);
      }
    }
    return products;
  }
}
