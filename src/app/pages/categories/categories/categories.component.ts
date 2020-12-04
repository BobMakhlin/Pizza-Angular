import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categoryList: Category[];


  constructor(
    private m_categoryService: CategoryService,
    private m_messagesService: MessagesService
  ) {
  }


  public ngOnInit(): void {
    this.loadCategories();
  }

  public handleCategoryEnablingOrDisabling(category: Category) {
    this.m_categoryService.putCategory(category)
      .subscribe(
        _ => this.m_messagesService.addMessage('Success!'),
        _ => this.m_messagesService.addMessage('Error...')
      );
  }

  private loadCategories(): void {
    const categories$: Observable<Category[]> = this.m_categoryService.getCategories();

    categories$.subscribe(
      categories => this.categoryList = categories
    );
  }

}
