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

    testArray: any[] = [
        {
            id: 1,
            name: "Adam"
        },
        {
            id: 2,
            name: "Bertil"
        },
        {
            id: 3,
            name: "Ceasar"
        }
    ];

    forOfCounter: number = 0;

    constructor(private _productService: ProductService, private _router: Router) {

    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
            (products) => this.products = products,
            (error) => this.errorMessage = error
            );

        //
        // Three kind of loops

        for (var index = 0; index < this.testArray.length; index++) {
            console.log("for loop: " + this.testArray[index].name);

            if (index === 1) {
                break;  // We can break in good old for loops
            }
        }

        this.testArray.forEach((val, index) => {
            console.log("forEach " + val.name);

            // We can not break or continue inside forEach loops
        });

        for (let val of this.testArray) {
            console.log("for of " + val.name);

            // We can break and continue in this loop, but cant get to index without an external counter

            if (this.forOfCounter === 1) {
                break;
            }

            this.forOfCounter++;
        }
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