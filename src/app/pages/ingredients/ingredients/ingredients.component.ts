import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientService } from 'src/app/services/crud/api-crud/ingredient.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  public ingredientList: Ingredient[];


  constructor(
    private m_ingredientService: IngredientService,
    private m_messagesService: MessagesService
  ) { }


  public ngOnInit(): void {
    this.loadIngredients();
  }

  public handleIngredientEnablingOrDisabling(ingredient: Ingredient): void {
    this.m_ingredientService.put(ingredient.id, ingredient)
      .subscribe(
        _ => this.m_messagesService.addMessage('Success!'),
        _ => this.m_messagesService.addMessage('Error...')
      );
  }


  private loadIngredients(): void {
    this.m_ingredientService.getAll()
      .subscribe(ingredients => this.ingredientList = ingredients);
  }

}
