import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../data/urls';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(
    private m_http: HttpClient
  ) { }

  public getIngredients(): Observable<Ingredient[]> {
    return this.m_http.get<Ingredient[]>(
      urls.apis.pizza.ingredients
    );
  }

  public getIngredient(id: number): Observable<Ingredient> {
    return this.m_http.get<Ingredient>(
      `${urls.apis.pizza.ingredients}/${id}`
    );
  }

  public putIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.m_http.put<Ingredient>(
      `${urls.apis.pizza.ingredients}/${ingredient.id}`,
      ingredient
    );
  }

  public postIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.m_http.post<Ingredient>(
      urls.apis.pizza.ingredients,
      ingredient
    );
  }

}
