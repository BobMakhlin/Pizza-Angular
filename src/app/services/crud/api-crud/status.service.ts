import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/data/urls';
import { Status } from 'src/app/models/status';
import { ApiCrudBase } from './api-crud-base';

@Injectable({
  providedIn: 'root'
})
export class StatusService extends ApiCrudBase<Status, number> {

  constructor(
    http: HttpClient
  ) {
    super(urls.apis.pizza.statuses, http);
  }

}
