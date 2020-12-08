import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Ingredient } from 'src/app/models/ingredient';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/crud/api-crud/category.service';
import { IngredientService } from 'src/app/services/crud/api-crud/ingredient.service';
import { ProductService } from 'src/app/services/crud/api-crud/product.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  public product: Product;
  public categoryList: Category[];
  public ingredientList: Ingredient[];

  constructor(
    private m_categoryService: CategoryService,
    private m_ingredientService: IngredientService,
    private m_productService: ProductService,
    private m_messagesService: MessagesService,
    private m_location: Location
  ) { }

  public ngOnInit(): void {
    this.loadProduct();
    this.loadCategories();
    this.loadIngredients();
  }

  public handleFormSubmit(product: Product): void {
    this.m_productService.post(product)
      .subscribe(
        _ => {
          this.m_messagesService.addMessage('Success!');

          timer(1000).subscribe(_ => this.m_location.back());
        },

        _ => this.m_messagesService.addMessage('Error...')
      );
  }

  public isPageLoaded() {
    return (
      this.product &&
      this.categoryList &&
      this.ingredientList
    );
  }


  private loadProduct(): void {
    this.product = {
      id: 0,
      isEnabled: false,
      photo: '',
      ingredients: []
    } as Product;
  }

  private loadCategories(): void {
    this.m_categoryService.getAll()
      .subscribe(categories => this.categoryList = categories);
  }

  private loadIngredients(): void {
    this.m_ingredientService.getAll()
      .subscribe(ingredients => this.ingredientList = ingredients);
  }

}
