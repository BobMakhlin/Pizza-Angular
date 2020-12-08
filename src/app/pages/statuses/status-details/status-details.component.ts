import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Status } from 'src/app/models/status';
import { StatusService } from 'src/app/services/crud/api-crud/status.service';

@Component({
  selector: 'app-status-details',
  templateUrl: './status-details.component.html',
  styleUrls: ['./status-details.component.css']
})
export class StatusDetailsComponent implements OnInit {

  public status: Status;

  constructor(
    private m_statusService: StatusService,
    private m_activatedRoute: ActivatedRoute
  ) {}


  public ngOnInit(): void {
    this.loadCategory();
  }

  private loadCategory() {
    const idString: string = this.m_activatedRoute.snapshot.paramMap.get('id');
    const id: number = +idString;

    this.m_statusService.get(id)
      .subscribe(status => this.status = status);
  }

}
