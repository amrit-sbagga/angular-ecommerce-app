import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router , ActivatedRoute, ParamMap } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

 products: Observable<Product[]>;
 selectedId: number;

  constructor(
    private service: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.products = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId =+ params.get('id');
        return this.service.getProducts();
      })
    )
  }

}
