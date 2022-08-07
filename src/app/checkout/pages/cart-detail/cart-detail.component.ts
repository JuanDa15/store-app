import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/products/interface/product.interface';
import { CartService } from 'src/app/products/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
  providers: [MessageService]
})
export class CartDetailComponent implements OnInit {

  public cartServiceInstance: CartService;

  public cartList: Product[];

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

  constructor(private messageService: MessageService) {
    this.cartServiceInstance = CartService.getInstance();
    this.cartList = this.cartServiceInstance.cartList;
  }

  get totalPrice(): number {
    return this.cartServiceInstance.totalPrice;
  }


  ngOnInit(): void {
  }

  public updateQuantity( quantity: number, productID: number): void {
    this.cartServiceInstance.updateItemQuantity(quantity, productID);
  }

  public removeFromCart( product: Product): void {
    this.cartServiceInstance.removeFromCart( product );
    this.cartList = this.cartServiceInstance.cartList;
    this.messageService.add({
      severity:'success',
      summary: 'Success',
      detail: `"${product.name}" removed from cart`
    });
  }

}
