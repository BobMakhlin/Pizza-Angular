import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/crud/api-crud/product.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList: Product[];


  constructor(
    private m_productService: ProductService,
    private m_messagesService: MessagesService
  ) { }


  public ngOnInit(): void {
    this.loadProducts();
  }

  public handleProductEnablingOrDisabling(product: Product): void {
    this.m_productService.putPartially(product.id, product)
      .subscribe(
        _ => this.m_messagesService.addMessage('Success!'),
        _ => this.m_messagesService.addMessage('Error...')
      );
  }


  private loadProducts(): void {
    this.m_productService.getAll()
      .subscribe(products => this.productList = products);
  }

}
