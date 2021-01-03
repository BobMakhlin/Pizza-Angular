import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderPosition } from 'src/app/models/order-position';
import { Product } from 'src/app/models/product';
import { OrderPositionAddDialogComponent } from '../../dialogs/order-position-add.dialog/order-position-add-dialog.component';

@Component({
  selector: 'app-order-positions-crud',
  templateUrl: './order-positions-crud.component.html',
  styleUrls: ['./order-positions-crud.component.css'],
})
export class OrderPositionsCrudComponent {
  @Input() orderPositions: OrderPosition[];
  @Input() productList: Product[];

  constructor(private m_dialog: MatDialog) {}

  public createOrderPosition(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    const dialogRef = this.m_dialog.open(
      OrderPositionAddDialogComponent,
      dialogConfig
    );
    dialogRef.componentInstance.productList = this.productList;

    dialogRef
      .afterClosed()
      .subscribe((result: { product: Product; amount: number }) => {
        const { product, amount } = result;

        const orderPosition: OrderPosition = {
          productId: product.id,
          productPrice: product.price,
          productTitle: product.title,
          amount,
        } as OrderPosition;

        this.addOrderPosition(orderPosition);
      });
  }

  private addOrderPosition(orderPosition: OrderPosition): void {
    const existingOrderPosition: OrderPosition = this.orderPositions.find(
      (position) => position.productId === orderPosition.productId
    );

    if (existingOrderPosition) {
      existingOrderPosition.amount = orderPosition.amount;
    }
    else {
      this.orderPositions.push(orderPosition);
    }
  }
}
