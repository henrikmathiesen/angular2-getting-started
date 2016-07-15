import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router'; // need ROUTER_DIRECTIVES to use directive links, need Router to navigate programatically

import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';

declare var require: any;

const PAGE_TITLE: string = "Product List";

@Component({
    template: require('./product-list.component.html'),
    styles: [require('./product-list.component.less').toString()],
    directives: [StarComponent, ROUTER_DIRECTIVES],
    pipes: [ProductFilterPipe],
})
export class ProductListComponent implements OnInit {
    pageTitle: string = PAGE_TITLE;
    showImage: boolean = false;
    listFilter: string = "";
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService, private _router: Router) {

    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
            (products) => this.products = products,
            (error) => this.errorMessage = error
            );
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message): void {
        this.pageTitle = PAGE_TITLE + " " + message;
    }

    navigateToDetail(product: IProduct) {
        this._router.navigate(['product', product.productId]);
    }
}