import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Status } from 'src/app/models/status';
import { CategoryService } from 'src/app/services/crud/api-crud/category.service';
import { StatusService } from 'src/app/services/crud/api-crud/status.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-status-add',
  templateUrl: './status-add.component.html',
  styleUrls: ['./status-add.component.css']
})
export class StatusAddComponent {

  public status: Status = { id: 0 } as Status;


  constructor(
    private m_statusService: StatusService,
    private m_messagesService: MessagesService,
    private m_location: Location
  ) { }


  public handleFormSubmit(status: Status): void {
    this.m_statusService.post(status)
      .subscribe(
        _ => {
          this.m_messagesService.addMessage('Success!');

          timer(1000).subscribe(_ => this.m_location.back());
        },

        _ => this.m_messagesService.addMessage('Error...')
      );
  }

}
