import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderStatus } from 'src/app/models/order-status';
import { OrderStatusEditDialogComponent } from '../../dialogs/order-status-edit-dialog/order-status-edit-dialog.component';

@Component({
  selector: 'app-order-statuses-table',
  templateUrl: './order-statuses-table.component.html',
  styleUrls: ['./order-statuses-table.component.css']
})
export class OrderStatusesTableComponent {

  @Input() orderStatuses: OrderStatus[];

  
  constructor(
    private m_dialog: MatDialog
  ) {}


  public editOrderStatus(orderStatus: OrderStatus): void {
    const dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = orderStatus;

    const dialogRef = this.m_dialog.open(
      OrderStatusEditDialogComponent,
      dialogConfig
    );

    dialogRef
      .afterClosed()
      .subscribe((result: { time: Date }) => {
        const { time } = result;
        orderStatus.time = time;
      });
  }

  public removeOrderStatus(orderStatus: OrderStatus): void {
    const index: number = this.orderStatuses.indexOf(orderStatus);

    if (index === -1) return;

    this.orderStatuses.splice(index, 1);
  }

}
