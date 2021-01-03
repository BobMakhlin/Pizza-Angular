import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ingredient } from 'src/app/models/ingredient';
import { MessagesService } from 'src/app/services/messages.service';
import { ProductIngredientAddDialogComponent } from '../../dialogs/product-ingredient-add-dialog/product-ingredient-add-dialog.component';

@Component({
  selector: 'app-product-ingredients-crud',
  templateUrl: './product-ingredients-crud.component.html',
  styleUrls: ['./product-ingredients-crud.component.css'],
})
export class ProductIngredientsCrudComponent {
  @Input() productIngredients: Ingredient[];
  @Input() ingredientList: Ingredient[];

  constructor(
    private m_dialog: MatDialog,
    private m_messagesService: MessagesService
  ) {}

  public createProductIngredient(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    const dialogRef = this.m_dialog.open(
      ProductIngredientAddDialogComponent,
      dialogConfig
    );
    dialogRef.componentInstance.ingredientList = this.ingredientList;

    dialogRef.afterClosed().subscribe((result: { ingredient: Ingredient }) => {
      const { ingredient } = result;

      this.addProductIngredient(ingredient);
    });
  }

  private addProductIngredient(ingredient: Ingredient): void {
    const existingProductIngredient: Ingredient = this.productIngredients.find(
      (item) => item.id === ingredient.id
    );

    if (existingProductIngredient) {
      this.m_messagesService.addMessage(
        `You can't add ingredient ${existingProductIngredient.title} twice`
      );
    } 
    else {
      this.productIngredients.push(ingredient);
    }
  }
}
