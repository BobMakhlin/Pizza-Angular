import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-product-ingredients-table',
  templateUrl: './product-ingredients-table.component.html',
  styleUrls: ['./product-ingredients-table.component.css']
})
export class ProductIngredientsTableComponent {

  @Input() productIngredients: Ingredient[]; 

  public removeProductIngredient(ingredient: Ingredient): void {
    const index: number = this.productIngredients.indexOf(ingredient);

    if (index === -1) return;

    this.productIngredients.splice(index, 1);
  }

}
