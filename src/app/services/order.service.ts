import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../data/urls';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private m_http: HttpClient
  ) { }

  public getOrders(): Observable<Order[]> {
    return this.m_http.get<Order[]>(
      urls.apis.pizza.orders
    );
  }

  public getOrder(id: number): Observable<Order> {
    return this.m_http.get<Order>(
      `${urls.apis.pizza.orders}/${id}`
    );
  }

  public putOrder(order: Order): Observable<Order> {
    return this.m_http.put<Order>(
      `${urls.apis.pizza.orders}/${order.id}`,
      order
    );
  }

  public postOrder(order: Order): Observable<Order> {
    return this.m_http.post<Order>(
      urls.apis.pizza.orders,
      order
    );
  }


}
