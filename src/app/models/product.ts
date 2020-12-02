import { Category } from './category';
import { Ingredient } from './ingredient';



export interface Product {
  id: number;
  title: string;
  description: string;
  photo: string;
  weight: number;
  price: number;
  isEnabled: boolean;
  category: Category;
  ingredients: Ingredient[];
}
