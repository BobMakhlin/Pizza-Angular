import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/crud/api-crud/product.service';
import { ImagePathService } from 'src/app/services/image-path.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: Product;


  constructor(
    private m_productService: ProductService,
    private m_activatedRoute: ActivatedRoute,
    public imagePathService: ImagePathService,
  ) {}


  public ngOnInit(): void {
    const productIdString: string = this.m_activatedRoute.snapshot.paramMap.get('id');
    const productId: number = +productIdString;

    this.m_productService.get(productId)
      .subscribe(product => this.product = product);
  }


  public getProductImagePath(): string {
    return `${this.imagePathService.productImagePath}/${this.product.id}.png`;
  }

}
