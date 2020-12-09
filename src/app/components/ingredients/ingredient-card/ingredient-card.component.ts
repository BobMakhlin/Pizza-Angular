import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { ImagePathService } from 'src/app/services/image-path.service';

@Component({
  selector: 'app-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.css']
})
export class IngredientCardComponent {

  @Input() model: Ingredient;
  @Output() onModelEnabledOrDisabled: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();


  constructor(
    public imagePathService: ImagePathService
  ) {}


  public handleSliderValueChange() {
    this.onModelEnabledOrDisabled.emit(this.model);
  }

  public getIngredientImagePath(): string {
    return `${this.imagePathService.ingredientImagePath}/${this.model.photo}`;
  }

}
