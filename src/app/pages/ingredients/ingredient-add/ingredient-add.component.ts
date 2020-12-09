import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientService } from 'src/app/services/crud/api-crud/ingredient.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.css']
})
export class IngredientAddComponent {

  public ingredient: Ingredient = {
    id: 0,
    isEnabled: false,
    photo: ''
  } as Ingredient;


  constructor(
    private m_ingredientService: IngredientService,
    private m_messagesService: MessagesService,
    private m_location: Location
  ) { }


  public handleFormSubmit(ingredient: Ingredient): void {
    this.m_ingredientService.post(ingredient)
      .subscribe(
        _ => {
          this.m_messagesService.addMessage('Success!');

          timer(1000).subscribe(_ => this.m_location.back());
        },

        _ => this.m_messagesService.addMessage('Error...')
      );
  }

}
