import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByName implements PipeTransform {

  transform(products: any[], searchText: string): any[] {
    if (!products || !searchText) {
      return products;
    }

    searchText = searchText.toLowerCase();

    return products.filter(product =>
      product.name.toLowerCase().includes(searchText)
    );
  }
}
