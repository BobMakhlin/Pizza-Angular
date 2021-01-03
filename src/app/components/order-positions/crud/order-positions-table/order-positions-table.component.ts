import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderPosition } from 'src/app/models/order-position';
import { OrderPositionAddDialogComponent } from '../../dialogs/order-position-add.dialog/order-position-add-dialog.component';
import { OrderPositionEditDialogComponent } from '../../dialogs/order-position-edit-dialog/order-position-edit-dialog.component';

@Component({
  selector: 'app-order-positions-table',
  templateUrl: './order-positions-table.component.html',
  styleUrls: ['./order-positions-table.component.css'],
})
export class OrderPositionsTableComponent {
  @Input() orderPositions: OrderPosition[];


  constructor(
    private m_dialog: MatDialog
  ) {}


  public editOrderPosition(orderPosition: OrderPosition): void {
    const dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = orderPosition;

    const dialogRef = this.m_dialog.open(
      OrderPositionEditDialogComponent,
      dialogConfig
    );

    dialogRef
      .afterClosed()
      .subscribe((result: { amount: number }) => {
        const { amount } = result;
        orderPosition.amount = amount;
      });
  }

  public removeOrderPosition(orderPosition: OrderPosition): void {
    const index: number = this.orderPositions.indexOf(orderPosition);

    if (index === -1) return;

    this.orderPositions.splice(index, 1);
  }
}
