import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CategoriesComponent } from './pages/categories/categories/categories.component';
import { CategoryAddComponent } from './pages/categories/category-add/category-add.component';
import { CategoryDetailsComponent } from './pages/categories/category-details/category-details.component';
import { CategoryEditComponent } from './pages/categories/category-edit/category-edit.component';
import { HomeComponent } from './pages/home/home.component';
import { IngredientsComponent } from './pages/ingredients/ingredients/ingredients.component';
import { OrdersComponent } from './pages/orders/orders/orders.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { StatusesComponent } from './pages/statuses/statuses/statuses.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/details/:id', component: CategoryDetailsComponent },
  { path: 'categories/edit/:id', component: CategoryEditComponent },
  { path: 'categories/add', component: CategoryAddComponent },
  
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'statuses', component: StatusesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
