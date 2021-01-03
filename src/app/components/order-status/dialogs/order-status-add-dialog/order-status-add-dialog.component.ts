import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-order-status-add-dialog',
  templateUrl: './order-status-add-dialog.component.html',
  styleUrls: ['./order-status-add-dialog.component.css']
})
export class OrderStatusAddDialogComponent implements OnInit {

  public formGroup: FormGroup;

  public statusList: Status[];


  constructor(
    private m_formBuilder: FormBuilder, 
    public dialogRef: MatDialogRef<OrderStatusAddDialogComponent>
  ) { }


  public get formStatus(): AbstractControl {
    return this.formGroup.get('status');
  }
  public get formTime(): AbstractControl {
    return this.formGroup.get('time');
  }


  public ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    const timeString: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    
    this.formGroup = this.m_formBuilder.group({
      status: [null, Validators.required],
      time: [timeString, Validators.required]
    })
  }

  public onFormSubmit(): void {
    this.dialogRef.close(this.formGroup.value);
  }

}
