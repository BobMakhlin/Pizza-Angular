import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  public mainFormGroup: FormGroup;


  @Input() model: Category;

  @Output() onFormSubmit: EventEmitter<Category> = new EventEmitter<Category>();


  constructor(
    private m_formBuilder: FormBuilder
  ) {}

  public get formTitle(): AbstractControl {
    return this.mainFormGroup.get('title');
  }


  public ngOnInit(): void {
    this.buildForm();
  }

  public handleFormSubmit(): void {
    const category: Category = this.mainFormGroup.value;
    this.onFormSubmit.emit(category);
  }

  public buildForm(): void {

    this.mainFormGroup = this.m_formBuilder.group({
      id: [
        this.model.id
      ],
      title: [
        this.model.title,
        [ Validators.required, Validators.maxLength(24) ]
      ],
      isEnabled: [
        this.model.isEnabled
      ]
    })

  }

}
