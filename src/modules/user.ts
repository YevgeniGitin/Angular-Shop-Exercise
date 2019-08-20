import { Product } from './product';

export interface User{
    fullName:string;
    userName:string;
    password:string;
    permission:string;
    productsInCard:Product[];
}