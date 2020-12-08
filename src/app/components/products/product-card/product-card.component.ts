import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ImagePathService } from 'src/app/services/image-path.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() model: Product;
  @Output() onModelEnabledOrDisabled: EventEmitter<Product> = new EventEmitter<Product>();


  constructor(
    public imagePathService: ImagePathService
  ) {}


  public handleSliderValueChange() {
    this.onModelEnabledOrDisabled.emit(this.model);
  }

  public getProductImagePath(): string {
    return `${this.imagePathService.productImagePath}/${this.model.id}.png`
  }


}
