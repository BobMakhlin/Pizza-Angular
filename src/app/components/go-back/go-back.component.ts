import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-go-back',
  template: `
    <button (click)="goBack()" class="btn btn-secondary">← Go back</button>
  `,
  styleUrls: ['./go-back.component.css']
})
export class GoBackComponent {

  constructor(
    private m_location: Location
  ) { }

  public goBack(): void {
    this.m_location.back();
  }

}
