import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderStatus } from 'src/app/models/order-status';
import { Status } from 'src/app/models/status';
import { OrderHelpersService } from 'src/app/services/order-helpers.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {

  public currentOrderStatus: OrderStatus;
  @Input() order: Order;


  constructor(
    public orderHelpers: OrderHelpersService
  ) {}


  public ngOnInit(): void {
    this.currentOrderStatus = this.orderHelpers.getOrderCurrentStatus(this.order);
  }


  public getSum(): number {
    return this.orderHelpers.getOrderSum(this.order);
  }

}
