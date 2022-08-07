import { Product } from "src/app/products/interface/product.interface";

export interface CartItem {
  product: Product;
  quantity: number;
}
