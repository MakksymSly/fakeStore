import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Iproducts } from 'src/app/models/products';
import { ProducsService } from 'src/app/services/producs.service';
import { DialogBoxComponent } from '../ui/dialog-box/dialog-box.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  constructor(
    private productService: ProducsService,
    public dialog: MatDialog
  ) {}

  basket!: Iproducts[];
  price!: number;
  openDialog(): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);
  }
  setPrice(products: Iproducts[]) {
    this.price = this.productService.setTotalPrice(products);
  }
  // basketSubscription!: Subscription;
  removeItem(id: number) {
    this.productService.removeFromBasket(id);
    this.basket = this.productService.getProductFromBasket();
    this.setPrice(this.basket);
  }
  plusItemQuantity(product: Iproducts) {
    product.quantity += 1;
    this.productService.postProductToBasket(product);
    this.setPrice(this.basket);
  }
  minusItemQuantity(product: Iproducts) {
    if (product.quantity === 1) {
      this.removeItem(product.id);
      this.basket = this.productService.getProductFromBasket();
    } else {
      product.quantity -= 1;
      this.productService.postProductToBasket(product);
      this.setPrice(this.basket);
    }
  }

  ngOnInit(): void {
    // this.basketSubscription = this.productService
    //   .getProductFromBasket()
    //   .subscribe((data) => {
    //     console.log(data);
    //     this.basket = data;
    //   });
    this.basket = this.productService.getProductFromBasket();
    this.setPrice(this.basket);
    // this.basket = new Array({ ...localStorage });
  }
  ngOnDestroy() {
    // if (this.basketSubscription) this.basketSubscription.unsubscribe();
  }
}
