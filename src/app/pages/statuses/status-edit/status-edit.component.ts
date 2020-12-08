import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { Status } from 'src/app/models/status';
import { StatusService } from 'src/app/services/crud/api-crud/status.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-status-edit',
  templateUrl: './status-edit.component.html',
  styleUrls: ['./status-edit.component.css']
})
export class StatusEditComponent implements OnInit {

  public status: Status;

  constructor(
    private m_activatedRoute: ActivatedRoute,
    private m_statusService: StatusService,
    private m_messagesService: MessagesService,
    private m_location: Location
  ) { }


  public ngOnInit(): void {
    this.loadStatus();
  }

  public handleFormSubmit(status: Status): void {
    this.m_statusService.put(status.id, status)
      .subscribe(
        _ => {
          this.m_messagesService.addMessage('Success!');

          timer(1000).subscribe(_ => this.m_location.back());
        },
        _ => this.m_messagesService.addMessage('Error...')
      )
  }


  private loadStatus(): void {
    const idString: string = this.m_activatedRoute.snapshot.paramMap.get('id');
    const id: number = +idString;

    this.m_statusService.get(id)
      .subscribe(status => this.status = status);
  }

}
