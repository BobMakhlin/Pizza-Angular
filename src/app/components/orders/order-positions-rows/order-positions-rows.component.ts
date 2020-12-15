import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { OrderPosition } from 'src/app/models/order-position';

@Component({
  selector: '[app-order-positions-rows]',
  templateUrl: './order-positions-rows.component.html',
  styleUrls: ['./order-positions-rows.component.css']
})
export class OrderPositionsRowsComponent {

  @Input() positionsFormArray: FormArray;


  public deletePosition(positionGroup: FormGroup): void {
    const controlIndex: number = this.positionsFormArray.controls.indexOf(positionGroup);
    this.positionsFormArray.removeAt(controlIndex);
  }


  public getOrderPosition(formGroup: FormGroup): OrderPosition {
    return formGroup.value;
  }

  public getOrderPositionTotalPrice(formGroup: FormGroup): number {
    const orderPosition: OrderPosition = this.getOrderPosition(formGroup);

    return orderPosition.productPrice * orderPosition.amount;
  }

}
