import { Observable } from 'rxjs';

export interface CrudService<T, TKey> {
  getAll(): Observable<T[]>,
  get(key: TKey): Observable<T>,
  put(key: TKey, item: T): Observable<T>,
  post(item: T): Observable<T>
}
