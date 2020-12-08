import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';
import remove from 'lodash-es/remove';
import { Ingredient } from 'src/app/models/ingredient';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-ingredients',
  templateUrl: './product-ingredients.component.html',
  styleUrls: ['./product-ingredients.component.css']
})
export class ProductIngredientsComponent {

  @Input() ingredientList: Ingredient[];
  @Input() formArray: FormArray;


  public deleteIngredient(control: AbstractControl): void {
    this.removeControl(control);
  }

  private removeControl(control: AbstractControl) {
    const controlIndex = this.formArray.controls.indexOf(control);
    this.formArray.removeAt(controlIndex);
  }

}
