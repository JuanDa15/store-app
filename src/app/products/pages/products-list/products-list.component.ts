import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/products/interface/product.interface';
import { CartListItem } from '../../interface/cartListItem.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public cartList: Product[];
  private cartServiceInstance: CartService;

  products: Product[] = [
    {
      id: 1,
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.webp',
      category: 'all',
      quantity: 0
    },
    {
      id: 2,
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.webp',
      quantity: 0
    },
    {
      id: 3,
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.webp',
      quantity: 0
    },
    {
      id: 4,
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.webp',
      quantity: 0
    },
    {
      id: 5,
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.webp',
      quantity: 0
    },
    {
      id: 6,
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.webp',
      quantity: 0
    }
  ]
  constructor() {
    this.cartServiceInstance = CartService.getInstance();
    this.cartList = this.cartServiceInstance.cartList;
  }

  ngOnInit(): void {
  }

  public onAddToCart( product: Product): void {
    this.cartServiceInstance.addToCart(product);
  }
}
