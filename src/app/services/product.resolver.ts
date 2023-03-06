import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { Iproducts } from '../models/products';
import { ProducsService } from './producs.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<Iproducts> {
  constructor(private productService: ProducsService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Iproducts> {
    return this.productService.getProduct(route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['products']);
        return EMPTY;
      })
    );
  }
}
