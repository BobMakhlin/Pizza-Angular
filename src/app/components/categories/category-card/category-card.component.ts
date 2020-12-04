import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() model: Category;

  @Output() onModelEnabledOrDisabled: EventEmitter<Category> = new EventEmitter<Category>();


  public handleSliderValueChange(): void {
    this.onModelEnabledOrDisabled.emit(this.model);
  }
}
