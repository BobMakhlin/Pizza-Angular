import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudService } from '../crud-service';


export class ApiCrudBase<T, TKey> implements CrudService<T, TKey> {

  constructor(
    private url: string,
    protected m_http: HttpClient
  ) {}


  public getAll(): Observable<T[]> {
    return this.m_http.get<T[]>(this.url);
  }

  public get(key: TKey): Observable<T> {
    return this.m_http.get<T>(`${this.url}/${key}`);
  }

  public put(key: TKey, item: T): Observable<T> {
    return this.m_http.put<T>(
      `${this.url}/${key}`,
      item
    );
  }

  public post(item: T): Observable<T> {
    return this.m_http.post<T>(
      `${this.url}`,
      item
    );
  }
}
