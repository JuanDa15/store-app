export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category?: Category;
  description: string;
  taxes?: number;
}

export interface Category {
  id:      number;
  name:    string;
  typeImg: string;
}
