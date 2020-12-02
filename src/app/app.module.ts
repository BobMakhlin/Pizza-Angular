import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CategoryCardComponent } from './components/categories/category-card/category-card.component';
import { CategoryListComponent } from './components/categories/category-list/category-list.component';
import { CategoryFormComponent } from './components/categories/category-form/category-form.component';
import { CategoryTableComponent } from './components/categories/category-table/category-table.component';
import { CategoryDetailsComponent } from './pages/categories/category-details/category-details.component';
import { CategoryEditComponent } from './pages/categories/category-edit/category-edit.component';
import { CategoryAddComponent } from './pages/categories/category-add/category-add.component';
import { IngredientCardComponent } from './components/ingredients/ingredient-card/ingredient-card.component';
import { IngredientListComponent } from './components/ingredients/ingredient-list/ingredient-list.component';
import { IngredientFormComponent } from './components/ingredients/ingredient-form/ingredient-form.component';
import { IngredientTableComponent } from './components/ingredients/ingredient-table/ingredient-table.component';
import { IngredientDetailsComponent } from './pages/ingredients/ingredient-details/ingredient-details.component';
import { IngredientEditComponent } from './pages/ingredients/ingredient-edit/ingredient-edit.component';
import { IngredientAddComponent } from './pages/ingredients/ingredient-add/ingredient-add.component';
import { StatusCardComponent } from './components/statuses/status-card/status-card.component';
import { StatusListComponent } from './components/statuses/status-list/status-list.component';
import { StatusFormComponent } from './components/statuses/status-form/status-form.component';
import { StatusTableComponent } from './components/statuses/status-table/status-table.component';
import { StatusDetailsComponent } from './pages/statuses/status-details/status-details.component';
import { StatusEditComponent } from './pages/statuses/status-edit/status-edit.component';
import { StatusAddComponent } from './pages/statuses/status-add/status-add.component';
import { OrderCardComponent } from './components/orders/order-card/order-card.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrderFormComponent } from './components/orders/order-form/order-form.component';
import { OrderTableComponent } from './components/orders/order-table/order-table.component';
import { OrderDetailsComponent } from './pages/orders/order-details/order-details.component';
import { OrderEditComponent } from './pages/orders/order-edit/order-edit.component';
import { OrderAddComponent } from './pages/orders/order-add/order-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    CategoryCardComponent,
    CategoryListComponent,
    CategoryFormComponent,
    CategoryTableComponent,
    CategoryDetailsComponent,
    CategoryEditComponent,
    CategoryAddComponent,
    IngredientCardComponent,
    IngredientListComponent,
    IngredientFormComponent,
    IngredientTableComponent,
    IngredientDetailsComponent,
    IngredientEditComponent,
    IngredientAddComponent,
    StatusCardComponent,
    StatusListComponent,
    StatusFormComponent,
    StatusTableComponent,
    StatusDetailsComponent,
    StatusEditComponent,
    StatusAddComponent,
    OrderCardComponent,
    OrderListComponent,
    OrderFormComponent,
    OrderTableComponent,
    OrderDetailsComponent,
    OrderEditComponent,
    OrderAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
