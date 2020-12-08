import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-combobox-form-control',
  templateUrl: './combobox-form-control.component.html',
  styleUrls: ['./combobox-form-control.component.css']
})
export class ComboboxFormControlComponent<T> implements OnInit {

  public selectedItem: T;
  @Input() itemsSource: T[];
  @Input() displayMember?: string;
  @Input() valueMember?: string;

  @Input() formArray: FormArray;

  @Output() onItemAdded: EventEmitter<T> = new EventEmitter<T>();


  public ngOnInit(): void {
    this.selectedItem = this.itemsSource[0];
  }

  public getDisplayValueFor(item: T): any | T {
    return item[this.displayMember] ?? item;
  }
  public getValueFor(item: T): any | T {
    return item[this.valueMember] ?? item;
  }


  public onButtonAddClicked(): void {
    this.addControl(this.selectedItem);
    this.onItemAdded.emit(this.selectedItem);
  }

  private addControl(value: T): void {
    const control: AbstractControl = new FormControl(value);
    this.formArray.push(control);
  }

}
