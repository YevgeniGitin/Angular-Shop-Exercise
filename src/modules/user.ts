import { Product } from './product';

export interface User{
    id:string;
    fullName:string;
    userName:string;
    password:string;
    permission:string;
    productsInCard:Product[];
}