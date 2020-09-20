import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})

export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: any): any[] {
        if (!items || !filter) {
            return items;
        }

        items = items.filter(item =>{ 
            var itemLowerCase = item.name.toLowerCase();
            return itemLowerCase.indexOf(filter.toLowerCase()) != -1;
        });

        return items;
    }
}