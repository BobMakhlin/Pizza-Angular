import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-short-table',
  templateUrl: './product-short-table.component.html',
  styleUrls: ['./product-short-table.component.css']
})
export class ProductShortTableComponent {

  @Input() model: Product;

}
