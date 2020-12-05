import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../../../data/urls';
import { Category } from '../../../models/category';
import { ApiCrudBase } from './api-crud-base';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiCrudBase<Category, number> {

  constructor(
    http: HttpClient
  ) {
    super(urls.apis.pizza.categories, http);
  }

}
