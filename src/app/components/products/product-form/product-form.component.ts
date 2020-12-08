import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Ingredient } from 'src/app/models/ingredient';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product;
  @Input() categoryList: Category[];
  @Input() ingredientList: Ingredient[];
  @Output() onFormSubmit: EventEmitter<Product> = new EventEmitter<Product>();

  public mainFormGroup: FormGroup;


  constructor(
    private m_formBuilder: FormBuilder
  ) { }


  public get formTitle(): AbstractControl {
    return this.mainFormGroup.get('title');
  }
  public get formDescription(): AbstractControl {
    return this.mainFormGroup.get('description');
  }
  public get formWeight(): AbstractControl {
    return this.mainFormGroup.get('weight');
  }
  public get formPrice(): AbstractControl {
    return this.mainFormGroup.get('price');
  }
  public get formCategory(): AbstractControl {
    return this.mainFormGroup.get('category');
  }
  public get formIngredients(): FormArray {
    return this.mainFormGroup.get('ingredients') as FormArray;
  }


  public ngOnInit(): void {
    this.buildForm();
  }

  public buildForm() {
    this.mainFormGroup = this.m_formBuilder.group({
      id:           [this.product.id],
      photo:        [this.product.photo],
      isEnabled:    [this.product.isEnabled],

      title:        [this.product.title, [Validators.required, Validators.maxLength(64)]],
      description:  [this.product.description, [Validators.maxLength(128)]],
      weight:       [this.product.weight, [Validators.required, Validators.min(1)]],
      price:        [this.product.price, [Validators.required, Validators.min(1)]],
      category:     [this.product.category, Validators.required],
      ingredients:  this.m_formBuilder.array(this.product.ingredients)
    });


  }

  public handleFormSubmit(): void {
    const product: Product = this.mainFormGroup.value;

    this.onFormSubmit.emit(product);
  }

  public compareCategories(category1: Category, category2: Category): boolean {
    return category1?.id === category2?.id;
  }

}
