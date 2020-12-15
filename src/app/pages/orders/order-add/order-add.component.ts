import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { Status } from 'src/app/models/status';
import { OrderService } from 'src/app/services/crud/api-crud/order.service';
import { ProductService } from 'src/app/services/crud/api-crud/product.service';
import { StatusService } from 'src/app/services/crud/api-crud/status.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  public productList: Product[];
  public statusList: Status[];
  public order: Order;


  constructor(
    private m_orderService: OrderService,
    private m_productService: ProductService,
    private m_statusService: StatusService,
    private m_messagesService: MessagesService,
    private m_location: Location
  ) { }


  public ngOnInit(): void {
    this.createOrder();
    this.loadProducts();
    this.loadStatuses();
  }

  public isLoaded() {
    return this.order && this.productList && this.statusList;
  }

  public handleFormSubmit(order: Order): void {
    this.m_orderService.post(order)
      .subscribe(
        _ => {
          this.m_messagesService.addMessage('Success!');

          timer(1000).subscribe(_ => this.m_location.back());
        },

        _ => this.m_messagesService.addMessage('Error...')
      );
  }


  private loadProducts(): void {
    this.m_productService.getAll()
      .subscribe(products => this.productList = products);
  }
  private loadStatuses(): void {
    this.m_statusService.getAll()
      .subscribe(statuses => this.statusList = statuses);
  }
  private createOrder(): void {
    const orderTime = new Date();

    const deliveryTime = new Date();
    deliveryTime.setDate(deliveryTime.getDate() + 1);


    this.order = {
      id: 0,
      orderTime,
      deliveryTime,
      orderPosition: [],
      orderStatus: []
    } as Order;
  }

}
