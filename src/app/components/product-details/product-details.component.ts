import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Iproducts } from 'src/app/models/products';
import { ProducsService } from 'src/app/services/producs.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Iproducts;
  productSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProducsService
  ) {}
  addToBasket(product: Iproducts) {
    product.quantity += 1;
    this.productService.postProductToBasket(product);
  }
  ngOnInit(): void {
    this.productSubscription = this.route.data.subscribe((data) => {
      console.log(data);
      this.product = data['data'];
    });
  }
  ngOnDestroy() {
    // if (this.productSubscription) this.productSubscription.unsubscribe();
  }
}
