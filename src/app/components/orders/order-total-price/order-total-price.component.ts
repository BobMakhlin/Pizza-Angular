import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Order } from 'src/app/models/order';
import { OrderPosition } from 'src/app/models/order-position';
import { OrderHelpersService } from 'src/app/services/order-helpers.service';

@Component({
  selector: 'app-order-total-price',
  templateUrl: './order-total-price.component.html',
  styleUrls: ['./order-total-price.component.css']
})
export class OrderTotalPriceComponent {

  @Input() orderPositions: OrderPosition[];


  public getSum(): number {
    return this.orderPositions.reduce(
      (sum: number, currentPosition: OrderPosition): number =>
        sum + currentPosition.productPrice * currentPosition.amount,
      0
    );
  }


}
