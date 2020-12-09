import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.css']
})
export class IngredientListComponent {

  @Input() models: Ingredient[];

  @Output() onModelEnabledOrDisabled: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

}
