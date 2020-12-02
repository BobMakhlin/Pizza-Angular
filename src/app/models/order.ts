import { OrderPosition } from './order-position';
import { OrderStatus } from './order-status';

export interface Order {
  id: number;
  orderTime: Date;
  deliveryTime: Date;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  comment: string;
  orderPosition: OrderPosition[];
  orderStatus: OrderStatus[];
}
