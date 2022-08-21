import { Product } from "./product.interface";

// Create
export interface ProductDTO extends Omit<Product, 'id'> {}

// Update
export interface UpdateProductDTO extends Partial<ProductDTO> {}
