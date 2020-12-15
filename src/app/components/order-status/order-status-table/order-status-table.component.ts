import { Component, Input, OnInit } from '@angular/core';
import { OrderStatus } from 'src/app/models/order-status';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-order-status-table',
  templateUrl: './order-status-table.component.html',
  styleUrls: ['./order-status-table.component.css']
})
export class OrderStatusTableComponent {

  @Input() orderStatuses: OrderStatus[];
  @Input() currentOrderStatus: OrderStatus;


  public isStatusIsCurrent(orderStatus: OrderStatus): boolean {
    return (
      this.currentOrderStatus &&
      this.currentOrderStatus.id === orderStatus.id
    );
  }

}
