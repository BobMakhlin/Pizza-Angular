import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderStatus } from 'src/app/models/order-status';
import { Status } from 'src/app/models/status';
import { MessagesService } from 'src/app/services/messages.service';
import { OrderStatusAddDialogComponent } from '../../dialogs/order-status-add-dialog/order-status-add-dialog.component';

@Component({
  selector: 'app-order-statuses-crud',
  templateUrl: './order-statuses-crud.component.html',
  styleUrls: ['./order-statuses-crud.component.css']
})
export class OrderStatusesCrudComponent {

  @Input() orderStatuses: OrderStatus[];
  @Input() statusList: Status[];

  constructor(
    private m_dialog: MatDialog,
    private m_messagesService: MessagesService
    ) {}

  public createOrderStatus(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    const dialogRef = this.m_dialog.open(
      OrderStatusAddDialogComponent,
      dialogConfig
    );
    dialogRef.componentInstance.statusList = this.statusList;

    dialogRef
      .afterClosed()
      .subscribe((result: { status: Status; time: Date }) => {
        const { status, time } = result;

        const orderStatus: OrderStatus = {
          statusId: status.id,
          statusTitle: status.title,
          time,
        } as OrderStatus;

        this.addOrderStatus(orderStatus);
      });
  }

  private addOrderStatus(orderStatus: OrderStatus): void {
    const existingOrderStatus: OrderStatus = this.orderStatuses.find(
      (item) => item.statusId === orderStatus.statusId
    );

    if (existingOrderStatus) {
      this.m_messagesService.addMessage(`You can't add status ${existingOrderStatus.statusTitle} twice!`)
    }
    else {
      this.orderStatuses.push(orderStatus);
    }
  }
}
