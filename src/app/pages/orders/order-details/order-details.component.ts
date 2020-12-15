import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrderStatus } from 'src/app/models/order-status';
import { Status } from 'src/app/models/status';
import { OrderService } from 'src/app/services/crud/api-crud/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  public order: Order;


  constructor(
    private m_activatedRoute: ActivatedRoute,
    private m_orderService: OrderService
  ) { }


  public ngOnInit(): void {
    this.loadOrder();
  }

  public isLoaded() {
    return this.order;
  }


  private loadOrder() {
    const idString: string = this.m_activatedRoute.snapshot.paramMap.get('id');
    const id: number = +idString;

    this.m_orderService.get(id)
      .subscribe(order => this.order = order);
  }

}
