import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ImagePathService {

  public productImagePath: string = `assets/images/products`;
  public ingredientImagePath: string = `assets/images/ingredients`;


  public getPlaceholder(): string {
    return 'assets/images/placeholder.png';
  }

}
