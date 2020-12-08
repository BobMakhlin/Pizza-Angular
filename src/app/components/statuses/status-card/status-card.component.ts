import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.css']
})
export class StatusCardComponent {

  @Input() model: Status;

}
