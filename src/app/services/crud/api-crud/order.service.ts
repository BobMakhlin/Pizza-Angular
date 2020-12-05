import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/data/urls';
import { Order } from 'src/app/models/order';
import { ApiCrudBase } from './api-crud-base';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends ApiCrudBase<Order, number> {

  constructor(
    http: HttpClient
  ) {
    super(urls.apis.pizza.orders, http);
   }

}
