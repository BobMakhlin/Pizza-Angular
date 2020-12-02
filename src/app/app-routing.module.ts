import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './components/categories/category-list/category-list.component';
import { IngredientListComponent } from './components/ingredients/ingredient-list/ingredient-list.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { StatusListComponent } from './components/statuses/status-list/status-list.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'categories', component: CategoryListComponent },
  { path: 'ingredients', component: IngredientListComponent },
  { path: 'statuses', component: StatusListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'orders', component: OrderListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
