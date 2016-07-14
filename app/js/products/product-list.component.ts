import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';

declare var require: any;

const PAGE_TITLE: string = "Product List";

@Component({
    selector: 'gs-products',
    template: require('./product-list.component.html'),
    styles: [require('./product-list.component.css').toString()],
    directives: [StarComponent],
    pipes: [ProductFilterPipe],
})
export class ProductListComponent implements OnInit {
    pageTitle: string = PAGE_TITLE;
    showImage: boolean = false;
    listFilter: string = "";
    products: IProduct[];

    constructor(private _productService: ProductService){
        
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message): void {
        this.pageTitle = PAGE_TITLE + " " + message;
    }
}