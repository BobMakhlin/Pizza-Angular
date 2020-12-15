import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { Status } from 'src/app/models/status';
import { OrderService } from 'src/app/services/crud/api-crud/order.service';
import { ProductService } from 'src/app/services/crud/api-crud/product.service';
import { StatusService } from 'src/app/services/crud/api-crud/status.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  public order: Order;
  public productList: Product[];
  public statusList: Status[];


  constructor(
    private m_activatedRoute: ActivatedRoute,
    private m_orderService: OrderService,
    private m_productService: ProductService,
    private m_statusService: StatusService,
    private m_messagesService: MessagesService,
    private m_location: Location
  ) { }


  public ngOnInit(): void {
    this.loadOrder();
    this.loadProducts();
    this.loadStatuses();
  }

  public handleFormSubmit(order: Order): void {
    this.m_orderService.put(order.id, order)
      .subscribe(
        _ => {
          this.m_messagesService.addMessage('Success!');

          timer(1000).subscribe(_ => this.m_location.back());
        },
        _ => this.m_messagesService.addMessage('Error...')
      )
  }

  public isLoaded() {
    return this.order && this.productList && this.statusList;
  }


  private loadOrder(): void {
    const idString: string = this.m_activatedRoute.snapshot.paramMap.get('id');
    const id: number = +idString;

    this.m_orderService.get(id)
      .subscribe(order => this.order = order);
  }

  private loadProducts(): void {
    this.m_productService.getAll()
      .subscribe(products => this.productList = products);
  }

  private loadStatuses(): void {
    this.m_statusService.getAll()
      .subscribe(statuses => this.statusList = statuses);
  }

}
