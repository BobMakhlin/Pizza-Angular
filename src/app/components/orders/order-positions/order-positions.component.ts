import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderPosition } from 'src/app/models/order-position';
import { Product } from 'src/app/models/product';
import { OrderHelpersService } from 'src/app/services/order-helpers.service';

@Component({
  selector: 'app-order-positions',
  templateUrl: './order-positions.component.html',
  styleUrls: ['./order-positions.component.css']
})
export class OrderPositionsComponent {

  public selectedProduct: Product;

  @Input() positionsFormArray: FormArray;
  @Input() products: Product[];

  constructor(
    private m_formBuilder: FormBuilder,
    private m_orderHelpers: OrderHelpersService
  ) { }


  public addPositionToOrder(): void {

    const selectedProductFormGroup: FormGroup = this.getSelectedProductFormGroup();


    if (!selectedProductFormGroup) {
      this.addSelectedProductToOrder();

      return;
    }


    const orderPosition: OrderPosition = selectedProductFormGroup.value;

    selectedProductFormGroup.patchValue({
      amount: orderPosition.amount + 1
    })

  }


  public getTotalPriceOf(group: FormGroup): number {
    const orderPosition: OrderPosition = group.value;

    return orderPosition.productPrice * orderPosition.amount;
  }


  private addSelectedProductToOrder(): void {

    const orderPosition : OrderPosition = {
      productId: this.selectedProduct.id,
      amount: 1,
      productTitle: this.selectedProduct.title,
      productPrice: this.selectedProduct.price
    } as OrderPosition;

    const orderPositionFg: FormGroup =
      this.m_orderHelpers.convertOrderPositionToFormGroup(orderPosition);

    this.positionsFormArray.push(orderPositionFg);
  }

  private getSelectedProductFormGroup(): FormGroup {
    return this.positionsFormArray.controls.find(
      (positionGroup: FormGroup) => {

        const orderPosition: OrderPosition = positionGroup.value;

        return orderPosition.productId === this.selectedProduct.id;

      }
    ) as FormGroup;
  }
}
