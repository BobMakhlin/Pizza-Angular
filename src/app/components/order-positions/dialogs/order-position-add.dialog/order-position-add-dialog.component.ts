import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OrderPosition } from 'src/app/models/order-position';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-order-position-add-dialog',
  templateUrl: './order-position-add-dialog.component.html',
  styleUrls: ['./order-position-add-dialog.component.css']
})
export class OrderPositionAddDialogComponent implements OnInit {

  public formGroup: FormGroup;

  public productList: Product[];


  constructor(
    private m_formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<OrderPositionAddDialogComponent>
  ) { }


  public get formProduct(): AbstractControl {
    return this.formGroup.get('product');
  }
  public get formAmount(): AbstractControl {
    return this.formGroup.get('amount');
  }


  public ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.formGroup = this.m_formBuilder.group({
      product: [null, Validators.required],
      amount: [1, [Validators.required, Validators.min(1)]]
    })
  }

  public onFormSubmit(): void {
    this.dialogRef.close(this.formGroup.value);
  }

}
