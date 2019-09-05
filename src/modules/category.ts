import { Product } from "./product";
export interface Category {
  id: string;
  title: string;
  productArr: Product[];
}
