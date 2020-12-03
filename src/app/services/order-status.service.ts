import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../data/urls';
import { OrderStatus } from '../models/order-status';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {

  constructor(
    private m_http: HttpClient
  ) { }

  public getOrderStatuss(): Observable<OrderStatus[]> {
    return this.m_http.get<OrderStatus[]>(
      urls.apis.pizza.orderStatus
    );
  }

  public getOrderStatus(id: number): Observable<OrderStatus> {
    return this.m_http.get<OrderStatus>(
      `${urls.apis.pizza.orderStatus}/${id}`
    );
  }

  public putOrderStatus(orderStatus: OrderStatus): Observable<OrderStatus> {
    return this.m_http.put<OrderStatus>(
      `${urls.apis.pizza.orderStatus}/${orderStatus.id}`,
      orderStatus
    );
  }

  public postOrderStatus(orderStatus: OrderStatus): Observable<OrderStatus> {
    return this.m_http.post<OrderStatus>(
      urls.apis.pizza.orderStatus,
      orderStatus
    );
  }

}
