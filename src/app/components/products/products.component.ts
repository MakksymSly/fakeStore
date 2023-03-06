import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Iproducts } from 'src/app/models/products';
import { ProducsService } from 'src/app/services/producs.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProducsService) {}
  products!: Iproducts[];
  productsSubscription!: Subscription;
  canEdit!: boolean;

  ngOnInit(): void {
    this.canEdit = true;

    this.productsSubscription = this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }

  addToBasket(product: Iproducts) {
    product.quantity += 1;
    this.productService.postProductToBasket(product);
  }
  ngOnDestroy() {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
