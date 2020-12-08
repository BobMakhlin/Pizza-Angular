import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientService } from 'src/app/services/crud/api-crud/ingredient.service';
import { ImagePathService } from 'src/app/services/image-path.service';

@Component({
  selector: 'app-ingredient-small',
  templateUrl: './ingredient-small.component.html',
  styleUrls: ['./ingredient-small.component.css']
})
export class IngredientSmallComponent {

  constructor(
    private m_imagePathService: ImagePathService
  ) {}

  @Input() model: Ingredient;


  public getIngredientImagePath(): string {
    return `${this.m_imagePathService.ingredientImagePath}/${this.model.photo}`;
  }

}
