import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/data/urls';
import { OrderStatus } from 'src/app/models/order-status';
import { ApiCrudBase } from './api-crud-base';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService extends ApiCrudBase<OrderStatus, number> {

  constructor(
    http: HttpClient
  ) {
    super(urls.apis.pizza.orderStatus, http);
  }

}
