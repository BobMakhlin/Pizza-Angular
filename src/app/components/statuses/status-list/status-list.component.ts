import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent {

  @Input() models: Status[];

}
