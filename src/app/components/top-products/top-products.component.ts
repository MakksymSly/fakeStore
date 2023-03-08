import { Component } from '@angular/core';
import { ItopProducts } from 'src/app/models/topProducts';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent {
  topProducts:ItopProducts[]=[
    {
      url: 'assets/images/xboxss.jpg',
      title: 'Xbox Series S',
      description: 'Hot price',
      price: 299,
      link: '/product/1',
    },
    {
      url: 'assets/images/switch.jpg',
      title: 'Nintendo Switch',
      description: 'Best seller',
      price: 299,
      link: '/product/16',
    },
  ]
}
