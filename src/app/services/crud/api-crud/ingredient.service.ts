import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from 'src/app/data/urls';
import { Ingredient } from 'src/app/models/ingredient';
import { ApiCrudBase } from './api-crud-base';

@Injectable({
  providedIn: 'root'
})
export class IngredientService extends ApiCrudBase<Ingredient, number> {

  constructor(
    http: HttpClient
  ) {
    super(urls.apis.pizza.ingredients, http);
  }

}
