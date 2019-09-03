import { Injectable } from '@angular/core';
import { User } from '../modules/user';
import { Product } from 'src/modules/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _logInFlag:boolean=true;//flag some one is loged in true=not
  private _connectUser:User;//save user that is loged in
  private _userIndex:number=0;//index of user in the array for the card service
  private _isAdmin:boolean=false;//admin flag defult not
  //users array
  users:User[]=[
    {
      fullName:'Jon Smith',
      userName:'user',
      password:'user',
      permission:'user',
      productsInCard:[]
    },
    {
      fullName:'Tod Tatal',
      userName:'admin',
      password:'admin',
      permission:'admin',
      productsInCard:[]
    }
  ];
  constructor() { }

  get isAdmin():boolean{
    return this._isAdmin;
  }
  set isAdmin(flag:boolean){
    this._isAdmin=flag;
  }

  get userIndex():number{
    return this._userIndex;
  }

  get logInFlag():boolean{
    return this._logInFlag;
  } 

  set logInFlag(flag:boolean){
    this._logInFlag=flag;
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
