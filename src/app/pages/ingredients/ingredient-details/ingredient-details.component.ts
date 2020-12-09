import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientService } from 'src/app/services/crud/api-crud/ingredient.service';
import { ImagePathService } from 'src/app/services/image-path.service';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.css']
})
export class IngredientDetailsComponent implements OnInit {

  public ingredient: Ingredient;


  constructor(
    private m_ingredientService: IngredientService,
    private m_activatedRoute: ActivatedRoute,
    public imagePathService: ImagePathService,
  ) {}


  public ngOnInit(): void {
    const idString: string = this.m_activatedRoute.snapshot.paramMap.get('id');
    const id: number = +idString;

    this.m_ingredientService.get(id)
      .subscribe(ingredient => this.ingredient = ingredient);
  }


  public getIngredientImagePath(): string {
    return `${this.imagePathService.productImagePath}/${this.ingredient.photo}`;
  }

}
