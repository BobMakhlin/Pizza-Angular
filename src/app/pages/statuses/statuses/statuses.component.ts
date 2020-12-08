import { Component, OnInit } from '@angular/core';
import { Status } from 'src/app/models/status';
import { StatusService } from 'src/app/services/crud/api-crud/status.service';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.css']
})
export class StatusesComponent implements OnInit {

  public statusList: Status[];

  constructor(
    private m_statusService: StatusService
  ) { }


  public ngOnInit(): void {
    this.loadStatuses();
  }

  private loadStatuses(): void {
    this.m_statusService.getAll()
      .subscribe(statuses => this.statusList = statuses);
  }
}
