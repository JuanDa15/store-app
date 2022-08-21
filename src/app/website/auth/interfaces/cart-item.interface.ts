import { Product } from "src/app/website/products/interface/product.interface";

export interface CartItem {
  product: Product;
  quantity: number;
}
