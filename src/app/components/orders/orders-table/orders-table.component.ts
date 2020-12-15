import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import maxBy from 'lodash-es/maxby';
import { timer } from 'rxjs';
import { Order } from 'src/app/models/order';
import { OrderStatus } from 'src/app/models/order-status';
import { Status } from 'src/app/models/status';
import { OrderStatusService } from 'src/app/services/crud/api-crud/order-status.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent {

  @Input() orders: Order[];
  @Input() statuses: Status[];

}
