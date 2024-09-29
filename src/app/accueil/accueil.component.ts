import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { FilterByName } from '../filter-by-name.pipe';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    SortByPricePipe,
    FilterByName,
  ],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {

  sortOrder: string = '';
  searchText: string = '';
  products: any[] = [];

  
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    
    this.products = this.productsService.getProducts();
  }

  setSortOrder(order: string) {
    this.sortOrder = order;
  }
}

