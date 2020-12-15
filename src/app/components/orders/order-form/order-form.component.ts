import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Order } from 'src/app/models/order';
import { OrderStatus } from 'src/app/models/order-status';
import { Product } from 'src/app/models/product';
import { Status } from 'src/app/models/status';
import { OrderService } from 'src/app/services/crud/api-crud/order.service';
import { OrderHelpersService } from 'src/app/services/order-helpers.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  public mainFormGroup: FormGroup;

  public selectedStatus: Status;

  @Input() model: Order;
  @Input() products: Product[];
  @Input() statuses: Status[];

  @Output() onFormSubmit: EventEmitter<Order> = new EventEmitter<Order>();


  constructor(
    private m_formBuilder: FormBuilder,
    private m_orderHelpers: OrderHelpersService
  ) { }


  public ngOnInit(): void {
    this.buildForm();
  }

  public handleFormSubmit(): void {
    const order: Order = this.mainFormGroup.value;
    this.onFormSubmit.emit(order);
  }

  public buildForm(): void {

    this.mainFormGroup =
      this.m_orderHelpers.convertOrderToFormGroup(this.model);

  }


  public get formTitle(): AbstractControl {
    return this.mainFormGroup.get('title');
  }

  public get formOrderTime(): AbstractControl {
    return this.mainFormGroup.get('orderTime');
  }

  public get formDeliveryTime(): AbstractControl {
    return this.mainFormGroup.get('deliveryTime');
  }

  public get formCustomerName(): AbstractControl {
    return this.mainFormGroup.get('customerName');
  }

  public get formCustomerPhone(): AbstractControl {
    return this.mainFormGroup.get('customerPhone');
  }

  public get formCustomerAddress(): AbstractControl {
    return this.mainFormGroup.get('customerAddress');
  }

  public get formComment(): AbstractControl {
    return this.mainFormGroup.get('comment');
  }

  public get formOrderStatus(): FormArray {
    return this.mainFormGroup.get('orderStatus') as FormArray;
  }

  public get formOrderPosition(): FormArray {
    return this.mainFormGroup.get('orderPosition') as FormArray;
  }
}


const OrderTimeAndDeliveryTimeValidator: ValidatorFn = (fg: FormGroup) => {

  const orderTime: AbstractControl = fg.get('orderTime');
  const deliveryTime: AbstractControl = fg.get('deliveryTime');

  if (orderTime.value < deliveryTime.value) {
    return null;
  }

  return { unrealOrderTime: true };
};

// fill the formarrays with data;
// the order should have at least one orderposition and orderstatus.
