import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {

  public mainFormGroup: FormGroup;


  @Input() model: Ingredient;

  @Output() onFormSubmit: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();


  constructor(
    private m_formBuilder: FormBuilder
  ) {}

  public get formTitle(): AbstractControl {
    return this.mainFormGroup.get('title');
  }

  public get formPrice(): AbstractControl {
    return this.mainFormGroup.get('price');
  }


  public ngOnInit(): void {
    this.buildForm();
  }

  public handleFormSubmit(): void {
    const ingredient: Ingredient = this.mainFormGroup.value;
    this.onFormSubmit.emit(ingredient);
  }

  public buildForm(): void {

    this.mainFormGroup = this.m_formBuilder.group({
      id: [
        this.model.id
      ],

      title: [
        this.model.title,
        [ Validators.required, Validators.maxLength(32) ]
      ],

      photo: [
        this.model.photo
      ],

      price: [
        this.model.price,
        [ Validators.required, Validators.min(1) ]
      ],

      isEnabled: [
        this.model.isEnabled
      ]
    })

  }

}
