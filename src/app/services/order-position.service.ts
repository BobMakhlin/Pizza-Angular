import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../data/urls';
import { OrderPosition } from '../models/order-position';

@Injectable({
  providedIn: 'root'
})
export class OrderPositionService {

  constructor(
    private m_http: HttpClient
  ) { }

  public getOrderPositions(): Observable<OrderPosition[]> {
    return this.m_http.get<OrderPosition[]>(
      urls.apis.pizza.orderPosition
    );
  }

  public getOrderPosition(id: number): Observable<OrderPosition> {
    return this.m_http.get<OrderPosition>(
      `${urls.apis.pizza.orderPosition}/${id}`
    );
  }

  public putOrderPosition(orderPosition: OrderPosition): Observable<OrderPosition> {
    return this.m_http.put<OrderPosition>(
      `${urls.apis.pizza.orderPosition}/${orderPosition.id}`,
      orderPosition
    );
  }

  public postOrderPosition(orderPosition: OrderPosition): Observable<OrderPosition> {
    return this.m_http.post<OrderPosition>(
      urls.apis.pizza.orderPosition,
      orderPosition
    );
  }

}
