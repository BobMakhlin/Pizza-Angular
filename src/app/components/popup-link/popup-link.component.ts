import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-popup-link]',
  templateUrl: './popup-link.component.html',
  styleUrls: ['./popup-link.component.css']
})
export class PopupLinkComponent {
  @Input() link: string;
}
