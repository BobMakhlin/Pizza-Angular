import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  public category: Category;

  constructor(
    private m_categoryService: CategoryService,
    private m_activatedRoute: ActivatedRoute
  ) {}


  public ngOnInit(): void {
    this.loadCategory();
  }

  private loadCategory() {
    const idString: string = this.m_activatedRoute.snapshot.paramMap.get('id');
    const id: number = +idString;

    this.m_categoryService.getCategory(id)
      .subscribe(category => this.category = category);
  }

}
