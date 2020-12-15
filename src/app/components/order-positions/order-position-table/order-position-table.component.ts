import { Component, Input, OnInit } from '@angular/core';
import { OrderPosition } from 'src/app/models/order-position';

@Component({
  selector: 'app-order-position-table',
  templateUrl: './order-position-table.component.html',
  styleUrls: ['./order-position-table.component.css']
})
export class OrderPositionTableComponent {

  @Input() orderPositions: OrderPosition[];

}
