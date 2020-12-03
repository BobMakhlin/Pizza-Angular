import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../data/urls';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private m_http: HttpClient
  ) { }

  public getProducts(): Observable<Product[]> {
    return this.m_http.get<Product[]>(
      urls.apis.pizza.products
    );
  }

  public getProduct(id: number): Observable<Product> {
    return this.m_http.get<Product>(
      `${urls.apis.pizza.products}/${id}`
    );
  }

  public putProduct(product: Product): Observable<Product> {
    return this.m_http.put<Product>(
      `${urls.apis.pizza.products}/${product.id}`,
      product
    );
  }

  public putProductPartially(product: Product): Observable<Product> {
    return this.m_http.put<Product>(
      `${urls.apis.pizza.products}/partially/${product.id}`,
      product
    );
  }

  public postProduct(product: Product): Observable<Product> {
    return this.m_http.post<Product>(
      urls.apis.pizza.products,
      product
    );
  }

}
