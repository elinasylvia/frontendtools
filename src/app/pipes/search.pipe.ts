import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: [any] | null, searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.Title.toLocaleLowerCase().includes(searchText);
    });
  }
}


