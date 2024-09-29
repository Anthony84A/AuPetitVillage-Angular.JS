import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailComponent {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.product = this.productsService.getProductById(+productId);
    }
  }
}
