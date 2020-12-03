import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../data/urls';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private m_http: HttpClient
  ) { }

  public getCategories(): Observable<Category[]> {
    return this.m_http.get<Category[]>(
      urls.apis.pizza.categories
    );
  }

  public getCategory(id: number): Observable<Category> {
    return this.m_http.get<Category>(
      `${urls.apis.pizza.categories}/${id}`
    );
  }

  public putCategory(category: Category): Observable<Category> {
    return this.m_http.put<Category>(
      `${urls.apis.pizza.categories}/${category.id}`,
      category
    );
  }

  public postCategory(category: Category): Observable<Category> {
    return this.m_http.post<Category>(
      urls.apis.pizza.categories,
      category
    );
  }

}
