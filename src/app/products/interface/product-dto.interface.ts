import { Product } from "./product.interface";

export interface ProductDTO extends Omit<Product, 'id'> {}
