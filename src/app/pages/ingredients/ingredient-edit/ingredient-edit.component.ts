import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientService } from 'src/app/services/crud/api-crud/ingredient.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.css']
})
export class IngredientEditComponent implements OnInit {

  public ingredient: Ingredient;

  constructor(
    private m_activatedRoute: ActivatedRoute,
    private m_ingredientService: IngredientService,
    private m_messagesService: MessagesService,
    private m_location: Location
  ) { }


  public ngOnInit(): void {
    this.loadIngredient();
  }

  public handleFormSubmit(ingredient: Ingredient): void {
    this.m_ingredientService.put(ingredient.id, ingredient)
      .subscribe(
        _ => {
          this.m_messagesService.addMessage('Success!');

          timer(1000).subscribe(_ => this.m_location.back());
        },
        _ => this.m_messagesService.addMessage('Error...')
      )
  }


  private loadIngredient(): void {
    const idString: string = this.m_activatedRoute.snapshot.paramMap.get('id');
    const id: number = +idString;

    this.m_ingredientService.get(id)
      .subscribe(ingredient => this.ingredient = ingredient);
  }

}
