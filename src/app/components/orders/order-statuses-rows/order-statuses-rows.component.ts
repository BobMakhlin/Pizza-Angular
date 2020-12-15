import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { OrderStatus } from 'src/app/models/order-status';

@Component({
  selector: '[app-order-statuses-rows]',
  templateUrl: './order-statuses-rows.component.html',
  styleUrls: ['./order-statuses-rows.component.css']
})
export class OrderStatusesRowsComponent {

  @Input() statusesFormArray: FormArray;


  public deleteStatus(statusGroup: FormGroup): void {
    const controlIndex: number = this.statusesFormArray.controls.indexOf(statusGroup);
    this.statusesFormArray.removeAt(controlIndex);
  }


  public getOrderStatus(formGroup: FormGroup): OrderStatus {
    return formGroup.value;
  }

}
