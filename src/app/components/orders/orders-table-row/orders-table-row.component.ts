import { Location } from '@angular/common';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input, OnInit } from '@angular/core';
import maxBy from 'lodash-es/maxby';
import { timer } from 'rxjs';
import { Order } from 'src/app/models/order';
import { OrderStatus } from 'src/app/models/order-status';
import { Status } from 'src/app/models/status';
import { OrderStatusService } from 'src/app/services/crud/api-crud/order-status.service';
import { MessagesService } from 'src/app/services/messages.service';
import { OrderHelpersService } from 'src/app/services/order-helpers.service';

@Component({
  selector: '[app-orders-table-row]',
  templateUrl: './orders-table-row.component.html',
  styleUrls: ['./orders-table-row.component.css']
})
export class OrdersTableRowComponent implements OnInit {

  public selectedStatus: Status;

  @Input() number: number;
  @Input() order: Order;
  @Input() statuses: Status[];


  constructor(
    private m_messagesService: MessagesService,
    private m_orderStatusService: OrderStatusService,
    private m_orderHelpers: OrderHelpersService
  ) { }


  public ngOnInit(): void {
    const orderStatus: OrderStatus =
      this.m_orderHelpers.getOrderCurrentStatus(this.order);

    this.selectedStatus = { id: orderStatus.statusId, title: orderStatus.statusTitle };
  }

  public compareOrders(order1: Order, order2: Order): boolean {
    return order1?.id === order2?.id;
  }


  public onStatusChanged(): void {
    this.saveCurrentOrderStatus();
  }

  public saveCurrentOrderStatus() {
    const orderStatus: OrderStatus = {

      statusId: this.selectedStatus.id,
      orderId: this.order.id,
      time: new Date()

    } as OrderStatus;

    this.m_orderStatusService.post(orderStatus)
      .subscribe(
        _ => {
          this.m_messagesService.addMessage('Success!');
        },

        _ => this.m_messagesService.addMessage('Error...')
      );
  }
}
