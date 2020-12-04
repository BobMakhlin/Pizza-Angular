import { Component, Input } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent {

  @Input() category: Category;

}
