import { Injectable } from '@angular/core';
import { User } from '../modules/user';
import { Product } from 'src/modules/product';
import  Users  from '../assets/data/users.json'

@Injectable({
  providedIn: 'root'
})
export class UserService {
   //users array
   users:User[]=Users;

  private _logIn:boolean;//flag some one is loged in true=not
  private _connectUser:User;//save user that is loged in from the local storage if it there
  private _userIndex:number;//index of user in the array for the card service
  private _isAdmin:boolean;//admin flag defult not
 //try to load data from local storage
  constructor() { 
    this._logIn=localStorage.getItem('id')? false:true;
    this._connectUser=localStorage.getItem('id')?this.getUserById(localStorage.getItem('id')):undefined;
    this._userIndex=localStorage.getItem('id')? this.getUserIndexById(localStorage.getItem('id')):0;
    this._isAdmin=localStorage.getItem('id')? (this.getUserById(localStorage.getItem('id')).permission==='admin'):false;
  }
  logout(){
    this.logIn = true;
    this.isAdmin = false;
    this.connectUser=undefined;
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
    this._userIndex=this.users.findIndex(o=>o===user);
  }

  //load name for the home page
  loadName():string{
    if(this.connectUser!==undefined){
     return this.connectUser.fullName;
    }else{
      return '';
    }
  }
  //for the log in prosses if the user name is exists
  loadUserByUserName(userName:string):User{
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
  }
  

}
