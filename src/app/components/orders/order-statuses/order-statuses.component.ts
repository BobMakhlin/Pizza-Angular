import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderStatus } from 'src/app/models/order-status';
import { Status } from 'src/app/models/status';
import { formatDate } from '@angular/common';
import { OrderHelpersService } from 'src/app/services/order-helpers.service';

@Component({
  selector: 'app-order-statuses',
  templateUrl: './order-statuses.component.html',
  styleUrls: ['./order-statuses.component.css']
})
export class OrderStatusesComponent {

  public selectedStatus: Status;

  @Input() statusesFormArray: FormArray;
  @Input() statuses: Status[];

  constructor(
    private m_formBuilder: FormBuilder,
    private m_orderHelpers: OrderHelpersService
  ) {}


  public addStatusToOrder(): void {

    const orderStatus: OrderStatus = {
      statusId: this.selectedStatus.id,
      statusTitle: this.selectedStatus.title,
      time: new Date()
    } as OrderStatus;

    const orderStatusFg: FormGroup =
      this.m_orderHelpers.convertOrderStatusToFormGroup(orderStatus);

    this.statusesFormArray.push(orderStatusFg);
    
  }

  public deleteStatus(group: AbstractControl): void {
    const controlIndex = this.statusesFormArray.controls.indexOf(group);
    this.statusesFormArray.removeAt(controlIndex);
  }
}
