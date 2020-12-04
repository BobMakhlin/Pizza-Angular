import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  @Input() models: Category[];

  @Output() onModelEnabledOrDisabled: EventEmitter<Category> = new EventEmitter<Category>();

}
