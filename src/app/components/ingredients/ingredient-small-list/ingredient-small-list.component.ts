import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-ingredient-small-list',
  templateUrl: './ingredient-small-list.component.html',
  styleUrls: ['./ingredient-small-list.component.css']
})
export class IngredientSmallListComponent {

  @Input() ingredients: Ingredient[];

}
