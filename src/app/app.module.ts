import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { OrderFormComponent } from './components/orders/order-form/order-form.component';
import { OrderDetailsComponent } from './pages/orders/order-details/order-details.component';
import { OrderEditComponent } from './pages/orders/order-edit/order-edit.component';
import { OrderAddComponent } from './pages/orders/order-add/order-add.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { ProductTableComponent } from './components/products/product-table/product-table.component';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';
import { ProductEditComponent } from './pages/products/product-edit/product-edit.component';
import { ProductAddComponent } from './pages/products/product-add/product-add.component';
import { CategoriesComponent } from './pages/categories/categories/categories.component';
import { IngredientsComponent } from './pages/ingredients/ingredients/ingredients.component';
import { StatusesComponent } from './pages/statuses/statuses/statuses.component';
import { OrdersComponent } from './pages/orders/orders/orders.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/loading/loading.component';
import { MessageListComponent } from './components/messages/message-list/message-list.component';
import { MessageComponent } from './components/messages/message/message.component';
import { FontAwesomeIconsModule } from './fontawesome-icons/fontawesome-icons.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoBackComponent } from './components/go-back/go-back.component';
import { ComboboxFormControlComponent } from './components/combobox-form-control/combobox-form-control.component';
import { ProductIngredientsComponent } from './components/products/product-ingredients/product-ingredients.component';
import { ProductShortTableComponent } from './components/products/product-short-table/product-short-table.component';
import { OrdersTableComponent } from './components/orders/orders-table/orders-table.component';
import { OrdersTableRowComponent } from './components/orders/orders-table-row/orders-table-row.component';
import { OrderTableComponent } from './components/orders/order-table/order-table.component';
import { PopupLinkComponent } from './components/popup-link/popup-link.component';
import { OrderPositionTableComponent } from './components/order-positions/order-position-table/order-position-table.component';
import { OrderStatusTableComponent } from './components/order-status/order-status-table/order-status-table.component';
import { OrderStatusesComponent } from './components/orders/order-statuses/order-statuses.component';
import { OrderPositionsComponent } from './components/orders/order-positions/order-positions.component';
import { OrderPositionsRowsComponent } from './components/orders/order-positions-rows/order-positions-rows.component';
import { OrderTotalPriceComponent } from './components/orders/order-total-price/order-total-price.component';
import { OrderStatusesRowsComponent } from './components/orders/order-statuses-rows/order-statuses-rows.component';


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
    OrderFormComponent,
    OrdersTableComponent,
    OrderDetailsComponent,
    OrderEditComponent,
    OrderAddComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductTableComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductAddComponent,
    CategoriesComponent,
    IngredientsComponent,
    StatusesComponent,
    OrdersComponent,
    ProductsComponent,
    LoadingComponent,
    MessageListComponent,
    MessageComponent,
    GoBackComponent,
    ComboboxFormControlComponent,
    ProductIngredientsComponent,
    ProductShortTableComponent,
    OrdersTableRowComponent,
    OrderTableComponent,
    PopupLinkComponent,
    OrderPositionTableComponent,
    OrderStatusTableComponent,
    OrderStatusesComponent,
    OrderPositionsComponent,
    OrderPositionsRowsComponent,
    OrderTotalPriceComponent,
    OrderStatusesRowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FontAwesomeIconsModule,
    FontAwesomeModule,

    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [NavBarComponent, AppComponent]
})
export class AppModule { }
