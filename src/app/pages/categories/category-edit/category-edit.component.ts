import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/crud/api-crud/category.service';
import { MessagesService } from 'src/app/services/messages.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  public category: Category;

  constructor(
    private m_activatedRoute: ActivatedRoute,
    private m_categoryService: CategoryService,
    private m_messagesService: MessagesService,
    private m_location: Location
  ) { }


  public ngOnInit(): void {
    this.loadCategory();
  }

  public handleFormSubmit(): void {
    this.m_categoryService.put(this.category.id, this.category)
      .subscribe(
        _ => {
          this.m_messagesService.addMessage('Success!');

          timer(1000).subscribe(_ => this.m_location.back());
        },
        _ => this.m_messagesService.addMessage('Error...')
      )
  }


  private loadCategory(): void {
    const idString: string = this.m_activatedRoute.snapshot.paramMap.get('id');
    const id: number = +idString;

    this.m_categoryService.get(id)
      .subscribe(category => this.category = category);
  }

}
