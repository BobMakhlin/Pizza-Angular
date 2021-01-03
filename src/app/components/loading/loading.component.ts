import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <img class="preloader" src="assets/images/gif/preloader.gif" alt="">
  `,
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
