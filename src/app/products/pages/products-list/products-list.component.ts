import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.webp',
      category: 'all',
    },
    {
      id: 2,
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.webp'
    },
    {
      id: 3,
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.webp'
    },
    {
      id: 4,
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.webp'
    },
    {
      id: 5,
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.webp'
    },
    {
      id: 6,
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.webp'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
