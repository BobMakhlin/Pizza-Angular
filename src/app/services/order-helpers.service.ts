import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import maxBy from 'lodash-es/maxby';
import { Order } from '../models/order';
import { OrderPosition } from '../models/order-position';
import { OrderStatus } from '../models/order-status';

@Injectable({
  providedIn: 'root'
})
export class OrderHelpersService {

  constructor(
    private m_formBuilder: FormBuilder
  ) { }


  public getOrderCurrentStatus(order: Order): OrderStatus {

    const maxOrderStatus: OrderStatus = maxBy(
      order.orderStatus,
      orderStatus => orderStatus.time
    );

    return maxOrderStatus;

  }

  public getOrderSum(order: Order): number {
    return order.orderPosition.reduce(
      (result: number, orderPosition: OrderPosition) => {
        return result + orderPosition.productPrice * orderPosition.amount
      },

      0
    );
  }


  public convertOrderPositionToFormGroup(orderPosition: OrderPosition): FormGroup {
    return this.m_formBuilder.group({
      productId: [orderPosition.productId],
      amount: [orderPosition.amount, [Validators.required, Validators.min(1)]],

      productTitle: [orderPosition.productTitle],
      productPrice: [orderPosition.productPrice]
    });
  }

  public convertOrderStatusToFormGroup(orderStatus: OrderStatus): FormGroup {
    const timeString: string = formatDate(orderStatus.time, 'yyyy-MM-dd', 'en');

    return this.m_formBuilder.group({
      statusId: [orderStatus.statusId],
      statusTitle: [orderStatus.statusTitle],
      time: [timeString, Validators.required]
    });
  }

  public convertOrderToFormGroup(order: Order): FormGroup {
    const orderTimeString: string = formatDate(order.orderTime, 'yyyy-MM-dd', 'en');
    const deliveryTimeString: string = formatDate(order.deliveryTime, 'yyyy-MM-dd', 'en');

    return this.m_formBuilder.group({
      id: [
        order.id
      ],

      orderTime: [
        orderTimeString,
        [Validators.required]
      ],
      deliveryTime: [
        deliveryTimeString,
        [Validators.required]
      ],

      customerName: [
        order.customerName,
        [Validators.required, Validators.maxLength(64)]
      ],

      customerPhone: [
        order.customerPhone,
        [Validators.required, Validators.maxLength(64)]
      ],

      customerAddress: [
        order.customerAddress,
        [Validators.required, Validators.maxLength(128)]
      ],

      comment: [
        order.comment,
        [Validators.maxLength(128)]
      ],

      orderStatus: this.m_formBuilder.array(
        order.orderStatus.map(
          item => this.convertOrderStatusToFormGroup(item)
        ),
        Validators.required
      ),

      orderPosition: this.m_formBuilder.array(
        order.orderPosition.map(
          item => this.convertOrderPositionToFormGroup(item)
        ),
        Validators.required
      ),
    }, { validator: OrderTimeAndDeliveryTimeValidator })
  }

}


const OrderTimeAndDeliveryTimeValidator: ValidatorFn = (fg: FormGroup) => {

  const orderTime: AbstractControl = fg.get('orderTime');
  const deliveryTime: AbstractControl = fg.get('deliveryTime');

  if (orderTime.value <= deliveryTime.value) {
    return null;
  }

  return { unrealOrderTime: true };
};
