import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { MessagesService } from 'src/app/services/messages.service';

import { timer } from 'rxjs';


@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {

  public category: Category = {} as Category;


  constructor(
    private m_categoryService: CategoryService,
    private m_messagesService: MessagesService,
    private m_location: Location
  ) { }


  public handleFormSubmit(): void {
    this.m_categoryService.postCategory(this.category)
      .subscribe(
        _ => {
          this.m_messagesService.addMessage('Success!');

          timer(1000).subscribe(_ => this.m_location.back());
        },

        _ => this.m_messagesService.addMessage('Error...')
      );
  }

}
