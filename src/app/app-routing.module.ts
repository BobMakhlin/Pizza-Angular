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
import { ProductAddComponent } from './pages/products/product-add/product-add.component';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';
import { ProductEditComponent } from './pages/products/product-edit/product-edit.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { StatusAddComponent } from './pages/statuses/status-add/status-add.component';
import { StatusDetailsComponent } from './pages/statuses/status-details/status-details.component';
import { StatusEditComponent } from './pages/statuses/status-edit/status-edit.component';
import { StatusesComponent } from './pages/statuses/statuses/statuses.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/details/:id', component: CategoryDetailsComponent },
  { path: 'categories/edit/:id', component: CategoryEditComponent },
  { path: 'categories/add', component: CategoryAddComponent },

  { path: 'products', component: ProductsComponent },
  { path: 'products/details/:id', component: ProductDetailsComponent },
  { path: 'products/edit/:id', component: ProductEditComponent },
  { path: 'products/add', component: ProductAddComponent },

  { path: 'ingredients', component: IngredientsComponent },

  { path: 'statuses', component: StatusesComponent },
  { path: 'statuses/details/:id', component: StatusDetailsComponent },
  { path: 'statuses/edit/:id', component: StatusEditComponent },
  { path: 'statuses/add', component: StatusAddComponent },

  { path: 'orders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
