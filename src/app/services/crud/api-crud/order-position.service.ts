import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/data/urls';
import { OrderPosition } from 'src/app/models/order-position';
import { ApiCrudBase } from './api-crud-base';

@Injectable({
  providedIn: 'root'
})
export class OrderPositionService extends ApiCrudBase<OrderPosition, number> {

  constructor(
    http: HttpClient
  ) {
    super(http, urls.apis.pizza.orderPosition);
  }

}
