import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Status } from 'src/app/models/status';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css']
})
export class StatusFormComponent implements OnInit {

  public mainFormGroup: FormGroup;


  @Input() model: Status;

  @Output() onFormSubmit: EventEmitter<Status> = new EventEmitter<Status>();


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
    const status: Status = this.mainFormGroup.value;
    this.onFormSubmit.emit(status);
  }

  public buildForm(): void {

    this.mainFormGroup = this.m_formBuilder.group({
      id: [
        this.model.id
      ],
      title: [
        this.model.title,
        [ Validators.required, Validators.maxLength(32) ]
      ]
    })

  }

}
