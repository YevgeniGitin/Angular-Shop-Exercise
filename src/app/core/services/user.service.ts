import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Product } from 'src/app/core/models/product';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserService {
  //users array
  users:User[];
  private userBehaviorSubject=new BehaviorSubject<User>(null);
  readonly user=this.userBehaviorSubject.asObservable();
  private url:string='../assets/data/users.json';
  private _logIn:boolean;//flag some one is loged in true=not
  private _connectUser:User;//save user that is loged in from the local storage if it there
  private _userIndex:number;//index of user in the array for the card service
  private _isAdmin:boolean;//admin flag defult not
  private userPromise:Promise<User[]>;
 //try to load data from local storage
  constructor( private http:HttpClient) { 
   this.userPromise=this.loadInitialData(this.url);
   this.userPromise.then((json)=>{
      this.users=json;
      this._logIn=localStorage.getItem('id')? false:true;
      this._connectUser=localStorage.getItem('id')?this.getUserById(localStorage.getItem('id')):null;
      this.userBehaviorSubject.next(this._connectUser);
      this._userIndex=localStorage.getItem('id')? this.getUserIndexById(localStorage.getItem('id')):0;
      this._isAdmin=localStorage.getItem('id')? (this.getUserById(localStorage.getItem('id')).permission==='admin'):false;
    })
    
  }
  //load data get request
  private loadInitialData(url:string):Promise<User[]>{
    return this.http.get(url)
      .pipe(map(json => json as User[]))
      .toPromise()
      .catch(this.handleError);
 }

 private handleError(error: Response) {
  console.error(error);
  const msg = `Error status code ${error.status} at ${error.url}`;
  return Promise.reject(msg || error);
  }
  //for is admin guard to check if it is a admin
  getUserPromise():Promise<User[]>{
    return this.userPromise;
  }
  
  logout(){
    this.logIn = true;
    this.isAdmin = false;
    this.connectUser=null;
    this.userBehaviorSubject.next(null);
    this.userIndex=0;
    localStorage.removeItem('id');
  }

  getUserById(id:string):User{
    let user:User=this.users.find(o=>o.id===id);
      return user;
  }

  getUserIndexById(id:string):number{
    let index:number=this.users.findIndex(o=>o.id===id);
    return index;
  }
 
  get isAdmin():boolean{
    return this._isAdmin;
  }
  set isAdmin(flag:boolean){
    this._isAdmin=flag;
  }

  get userIndex():number{
    return this._userIndex;
  }

  set userIndex(index:number){
    this._userIndex=index;
  }

  get logIn():boolean{
    return this._logIn;
  } 

  set logIn(flag:boolean){
    this._logIn=flag;
  }

  get connectUser():User{
    return this._connectUser;
  }

  set connectUser(user:User){
    this._connectUser=user;
    if(user!==null){
      this._userIndex=this.users.findIndex(o=>o===user);
    }else{
      this._userIndex=0;
    }
    
    this.updateUser();
  }
//update user in Observable 
  updateUser(){
    this.userBehaviorSubject.next(this._connectUser);
  }

  //load name for the home page
  loadName():Observable<string>{
    return this.user.pipe(
      map((u)=>{
        if(u===null){
          return '';
        }else{
          return u.fullName;
        }
      })
    );
  }
  //for the log in prosses if the user name is exists
  loadUserByUserName(userName:string): User{
    return this.users.find(o=>o.userName===userName);
  }
  //the function is update users products cards
  updateProductsInCardAfterEdit(oldProduct:Product,newProduct:Product){
    for(let user of this.users){//go over the users
      let index= user.productsInCard.findIndex(o=>o===oldProduct); //search for product
      while(index!==-1){//change all selected products 
        user.productsInCard.splice(index,1);
        user.productsInCard.push(newProduct);
        index= user.productsInCard.findIndex(o=>o===oldProduct);
      }
    }
    this.connectUser= this.users.find(u=>u.id===this.connectUser.id);
  }
  //return loged in user cart
  loadCart():Observable<Product[]>{
    return this.user.pipe(
      map(u=>u.productsInCard)  
    );
  }
}
