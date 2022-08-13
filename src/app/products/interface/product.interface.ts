export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category?: string;
  description: string;
  taxes?: number;
}
