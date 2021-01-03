import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-status-edit-dialog',
  templateUrl: './order-status-edit-dialog.component.html',
  styleUrls: ['./order-status-edit-dialog.component.css']
})
export class OrderStatusEditDialogComponent implements OnInit {

  public formGroup: FormGroup;


  constructor(
    private m_formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<OrderStatusEditDialogComponent>
  ) { }


  public get formTime(): AbstractControl {
    return this.formGroup.get('time');
  }


  public ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    const timeString: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    
    this.formGroup = this.m_formBuilder.group({
      time: [timeString, Validators.required]
    })
  }

  public onFormSubmit(): void {
    this.dialogRef.close(this.formGroup.value);
  }

}
