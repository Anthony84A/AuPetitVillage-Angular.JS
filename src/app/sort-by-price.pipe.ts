import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], sortOrder: string): any[] {
    if (!products || sortOrder === '') {
      return products;
    }

    if (sortOrder === 'asc') {
      return products.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      return products.sort((a, b) => b.price - a.price);
    }
    
    return products;
  }

}
