import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderPosition } from 'src/app/models/order-position';

@Component({
  selector: 'app-order-position-edit-dialog',
  templateUrl: './order-position-edit-dialog.component.html',
  styleUrls: ['./order-position-edit-dialog.component.css']
})
export class OrderPositionEditDialogComponent implements OnInit {

  public formGroup: FormGroup;


  constructor(
    private m_formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<OrderPositionEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public orderPosition: OrderPosition
  ) { }


  public get formAmount(): AbstractControl {
    return this.formGroup.get('amount');
  }


  public ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.formGroup = this.m_formBuilder.group({
      amount: [this.orderPosition.amount, [Validators.required, Validators.min(1)]]
    })
  }

  public onFormSubmit(): void {
    this.dialogRef.close(this.formGroup.value);
  }

}
