import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-product-ingredient-add-dialog',
  templateUrl: './product-ingredient-add-dialog.component.html',
  styleUrls: ['./product-ingredient-add-dialog.component.css']
})
export class ProductIngredientAddDialogComponent {
  
  public formGroup: FormGroup;

  public ingredientList: Ingredient[];


  constructor(
    private m_formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<ProductIngredientAddDialogComponent>
  ) { }


  public get formIngredient(): AbstractControl {
    return this.formGroup.get('ingredient');
  }


  public ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.formGroup = this.m_formBuilder.group({
      ingredient: [null, Validators.required],
    })
  }

  public onFormSubmit(): void {
    this.dialogRef.close(this.formGroup.value);
  }

}
