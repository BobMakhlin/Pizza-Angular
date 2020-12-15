import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Status } from 'src/app/models/status';
import { OrderService } from 'src/app/services/crud/api-crud/order.service';
import { StatusService } from 'src/app/services/crud/api-crud/status.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders: Order[];
  public statuses: Status[];


  constructor(
    private m_statusService: StatusService,
    private m_orderService: OrderService
  ) { }


  public ngOnInit(): void {
    this.loadOrders();
    this.loadStatuses();
  }

  public isLoaded() {
    return this.orders && this.statuses;
  }


  private loadOrders(): void {
    this.m_orderService.getAll()
      .subscribe(orders => this.orders = orders);
  }

  private loadStatuses(): void {
    this.m_statusService.getAll()
      .subscribe(statuses => this.statuses = statuses);
  }

}
