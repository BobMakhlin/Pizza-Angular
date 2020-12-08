import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/data/urls';
import { Product } from 'src/app/models/product';
import { ApiCrudBase } from './api-crud-base';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiCrudBase<Product, number> {

  constructor(
    http: HttpClient
  ) {
    super(urls.apis.pizza.products, http);
  }

  public putPartially(key: number, item: Product): Observable<Product> {
    return this.m_http.put<Product>(
      `${urls.apis.pizza.products}/partially/${key}`,
      item
    );
  }

}
