import { PipeTransform, Pipe } from '@angular/core';

import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], [term]: string[]): IProduct[]{

        if(!term) {
            return value;
        }

        return value.filter((val: IProduct) =>  val.productName.toLowerCase().indexOf(term) !== -1 );
    }
}