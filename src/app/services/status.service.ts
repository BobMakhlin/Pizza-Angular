import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urls } from '../data/urls';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(
    private m_http: HttpClient
  ) { }

  public getStatuses(): Observable<Status[]> {
    return this.m_http.get<Status[]>(
      urls.apis.pizza.statuses
    );
  }

  public getStatus(id: number): Observable<Status> {
    return this.m_http.get<Status>(
      `${urls.apis.pizza.statuses}/${id}`
    );
  }

  public putStatus(status: Status): Observable<Status> {
    return this.m_http.put<Status>(
      `${urls.apis.pizza.statuses}/${status.id}`,
      status
    );
  }

  public postStatus(status: Status): Observable<Status> {
    return this.m_http.post<Status>(
      urls.apis.pizza.statuses,
      status
    );
  }

}
